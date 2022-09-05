import { NgModule } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';

const MATERIAL_MODULES = [
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatListModule,
  MatGridListModule,
  MatTableModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatDialogModule,
  FormsModule,
  ReactiveFormsModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule
]

@NgModule({
  imports:[
    MATERIAL_MODULES
  ],
  exports:[
    MATERIAL_MODULES
  ]
})
export class AplicacionMaterialModule { }
