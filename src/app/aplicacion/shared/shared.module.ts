import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { CircleProgressComponent } from './circle-progress/circle-progress.component';
import { AplicacionMaterialModule } from '../material/aplicacion-material.module';
import { TipoUsuarioPipe } from '../pipes/tipousuario.pipe';


@NgModule({
  declarations: [
    SidebarComponent,
    CircleProgressComponent,
    TipoUsuarioPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    AplicacionMaterialModule
  ],
  exports:[
    SidebarComponent,
    CircleProgressComponent
  ]
})
export class SharedModule { }
