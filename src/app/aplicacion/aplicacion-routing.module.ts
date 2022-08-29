import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReporteComponent } from './reporte/reporte.component';
import { AsignarComponent } from './asignar/asignar.component';
import { LlamadasComponent } from './llamadas/llamadas.component';
import { AplicacionComponent } from './aplicacion.component';

const routes:Routes =   
[
  {
    path:'',
    component:AplicacionComponent,
    children:
    [
      {
        path: 'reporte',
        component: ReporteComponent
      },
      {
        path: 'asignar',
        component: AsignarComponent
      },
      {
        path: 'llamadas',
        component: LlamadasComponent
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AplicacionRoutingModule { }
