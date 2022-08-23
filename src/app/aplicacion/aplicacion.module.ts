import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AplicacionComponent } from './aplicacion.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
    AplicacionComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule
  ]
})
export class AplicacionModule { }
