import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './login-page/formulario/formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { RecuperarPageComponent } from './recuperar-page/recuperar-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AplicacionMaterialModule } from '../aplicacion/material/aplicacion-material.module';


@NgModule({
  declarations: [ FormularioComponent ,LoginPageComponent, LoginComponent, RecuperarPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoginRoutingModule,
    AplicacionMaterialModule
  ],
  exports:[],
  providers:[]
})
export class LoginModule { }
