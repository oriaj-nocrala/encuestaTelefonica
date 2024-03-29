import { AuthGuard } from './login/guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'login',//falta el jwt
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path:'aplicacion',
    loadChildren: () => import('./aplicacion/aplicacion.module').then(m => m.AplicacionModule),
    canLoad:[ AuthGuard],
    canActivate: [AuthGuard]
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
