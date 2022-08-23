import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReporteComponent } from './reporte.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ReporteComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ReporteModule { }
