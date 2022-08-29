import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginComponent } from './login.component';
import { RecuperarPageComponent } from './recuperar-page/recuperar-page.component';

const routes:Routes = [
  {
    path:'',
    component:LoginComponent,
    children:[
      {
        path:'loguear',
        component: LoginPageComponent

      },
      {
        path:'recuperar',
        component: RecuperarPageComponent
      },
      {
        path:'**',
        redirectTo: 'loguear'
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
export class LoginRoutingModule { }
