import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsignarComponent } from './asignar.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AsignarComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AsignarModule { }
