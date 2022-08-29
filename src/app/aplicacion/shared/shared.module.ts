import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { CircleProgressComponent } from './circle-progress/circle-progress.component';


@NgModule({
  declarations: [
    SidebarComponent,
    CircleProgressComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    SidebarComponent,
    CircleProgressComponent
  ]
})
export class SharedModule { }
