import { NgModule } from '@angular/core';
import { AplicacionComponent } from './aplicacion.component';
import { SharedModule } from './shared/shared.module';
import { AplicacionRoutingModule } from './aplicacion-routing.module';
import { ReporteComponent } from './reporte/reporte.component';
import { AsignarComponent } from './asignar/asignar.component';
import { LlamadasComponent } from './llamadas/llamadas.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { AplicacionMaterialModule } from './material/aplicacion-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { AgregarDialogComponent } from './usuarios/agregar/agregar.component';
import { EditarDialogComponent } from './usuarios/editar/editar.component';
import { EliminarDialogComponent } from './usuarios/eliminar/eliminar.component';



@NgModule({
  declarations: [
    AplicacionComponent,
    ReporteComponent,
    AsignarComponent,
    LlamadasComponent,
    UsuariosComponent,
    EstadisticasComponent,
    EmpresasComponent,
  ],
  imports: [
    AplicacionRoutingModule,
    SharedModule,
    AplicacionMaterialModule,
    NgCircleProgressModule.forRoot(),
    FlexLayoutModule
  ]
})
export class AplicacionModule { }
