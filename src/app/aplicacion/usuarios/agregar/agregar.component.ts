import { Usuario } from './../../shared/modelos/usuario';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {Component, Inject} from '@angular/core';
import {DataService} from '../../shared/servicios/data.service';
import {FormControl, Validators} from '@angular/forms';
import {Issue} from '../../shared/modelos/usuario';

@Component({
  selector: 'app-add.dialog',
  templateUrl: '../../usuarios/agregar/agregar.component.html',
  styleUrls: ['../../usuarios/agregar/agregar.component.scss']
})

export class AddDialogComponent {
  constructor(public dialogRef: MatDialogRef<AddDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Usuario,
              public dataService: DataService) { }

  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      this.formControl.hasError('correo') ? 'Not a valid email' :
        '';
  }

  submit() {
  // empty stuff
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public confirmAdd(): void {
    this.dataService.addIssue(this.data);
  }
}
