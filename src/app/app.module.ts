import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AsignarModule } from './aplicacion/asignar/asignar.module';
import { LoginModule } from './login/login.module';
import { ReporteModule } from './aplicacion/reporte/reporte.module';
import { SharedModule } from './aplicacion/shared/shared.module';
import { AplicacionModule } from './aplicacion/aplicacion.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    AplicacionModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
