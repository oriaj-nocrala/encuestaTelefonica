import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {Component, Inject} from '@angular/core';
import {DataService} from '../../shared/servicios/data.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-baza.dialog',
  templateUrl: '../../usuarios/editar/editar.component.html',
  styleUrls: ['../../usuarios/editar/editar.component.scss']
})
export class EditDialogComponent {

  constructor(public dialogRef: MatDialogRef<EditDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, public dataService: DataService) { }

  formControl = new FormControl('', [
    // Validators.required,
    // Validators.email,
  ]);

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      this.formControl.hasError('correo') ? 'Not a valid email' :
        '';
  }

  submit() {
    // emppty stuff
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  stopEdit(): void {
    this.dataService.updateIssue(this.data);
  }
}
