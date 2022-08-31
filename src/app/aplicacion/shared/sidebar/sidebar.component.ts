import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

export interface SidebarRoutes{
  routerLink:string,
  name:string,
  icon:string
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  rutas: SidebarRoutes[] = [
    {
      routerLink:'reporte',
      name:'Reporte',
      icon:'assesment'
  },
  {
    routerLink:'asignar',
    name:'Asignar',
    icon:'assignment'
  },
  {
    routerLink:'usuarios',
    name:'Usuarios',
    icon:'person'
  },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
