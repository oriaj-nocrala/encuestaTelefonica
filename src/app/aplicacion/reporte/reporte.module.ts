import { ReporteComponent } from './reporte.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { AplicacionMaterialModule } from '../material/aplicacion-material.module';
import { NgCircleProgressModule } from 'ng-circle-progress';



@NgModule({
  declarations: [ReporteComponent],
  imports: [
    CommonModule,
    NgChartsModule,
    AplicacionMaterialModule,
    NgCircleProgressModule
  ]
})
export class ReporteModule { }
