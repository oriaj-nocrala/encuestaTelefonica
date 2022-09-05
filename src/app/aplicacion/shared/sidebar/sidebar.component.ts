import { AuthService } from './../../../login/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';

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

  // rutas: SidebarRoutes[] = [
  //   {
  //     routerLink:'reporte',
  //     name:'Reporte',
  //     icon:'assesment'
  // },
  // {
  //   routerLink:'asignar',
  //   name:'Asignar',
  //   icon:'assignment'
  // },
  // {
  //   routerLink:'usuarios',
  //   name:'Usuarios',
  //   icon:'person'
  // },
  // ]

  get auth(){
    return this.authService.auth;
  }
  constructor(private router: Router,
    private authService:AuthService) {  }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
