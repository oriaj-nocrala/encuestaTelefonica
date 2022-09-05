import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {Component, Inject} from '@angular/core';
import {DataService} from '../../shared/servicios/data.service';


@Component({
  selector: 'app-delete.dialog',
  templateUrl: '../../usuarios/eliminar/eliminar.component.html',
  styleUrls: ['../../usuarios/eliminar/eliminar.component.scss']
})
export class DeleteDialogComponent {

  constructor(public dialogRef: MatDialogRef<DeleteDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, public dataService: DataService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmDelete(): void {
    this.dataService.deleteIssue(this.data.rut);
  }
}
