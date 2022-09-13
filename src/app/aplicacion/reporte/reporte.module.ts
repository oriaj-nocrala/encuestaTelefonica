import { ReporteComponent } from './reporte.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [ReporteComponent],
  imports: [
    CommonModule,
    NgChartsModule
  ]
})
export class ReporteModule { }
