import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { AplicacionComponent } from './aplicacion/aplicacion.component';
import { ReporteComponent } from './aplicacion/reporte/reporte.component';
import { AsignarComponent } from './aplicacion/asignar/asignar.component';
import { LlamadasComponent } from './aplicacion/llamadas/llamadas.component';

const routes: Routes = [
  {
    path:'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path:'aplicacion',
    component: AplicacionComponent,
    children:[
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
  },
  {
    path:'**',
    redirectTo:'login'
  }
]

@NgModule({
  imports :[
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
