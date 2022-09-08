import { HttpErrorResponse } from '@angular/common/http';
import { DataService } from './../shared/servicios/data.service';
import { Component, OnInit } from '@angular/core';
import { Empresa } from '../shared/modelos/empresa';
import { Usuario } from '../shared/modelos/usuario';
import { AuthService } from 'src/app/login/services/auth.service';

export interface Asignacion {
  analista: string,
  empresa: string,
  comuna: string,
  hechos: number,
}
const ELEMENT_DATA: Asignacion[] = [
  {analista: 'Javiera Sepúlveda', empresa:"Alimentaciones", comuna:"San Bernardo", hechos:50},
  {analista: 'Carolina Frattasio', empresa:"Merken", comuna:'Pudahuel', hechos:100},
  {analista: 'Katherine Orellana', empresa:"Fedir", comuna:'Pudahuel', hechos:23}
];

@Component({
  selector: 'app-asignar',
  templateUrl: './asignar.component.html',
  styleUrls: ['./asignar.component.scss']
})

export class AsignarComponent implements OnInit {

  algo:string = '';

  constructor(public dataService: DataService,
    private authService: AuthService,) { }

  empresas:Empresa[] = [];
  bodegas: any[] = [];
  bodegasSelects: any[] = [];
  analistas:Usuario[] = [];
  asignaciones:any[] = [];
  datos: any[] = [];



  ngOnInit(): void {
    this.dataService.getAllIssues();
    this.obtenerEmpresas();
    this.obtenerBodegas();
    this.obtenerAsignaciones();
    this.obtenerAnalistas();
  }

  obtenerEmpresas(){
    this.dataService.getAllEmpresas().subscribe({
      next: (empresas) =>{
        this.empresas = empresas;
        console.log(this.empresas);
      },
      error:(e: HttpErrorResponse) =>{
        this.empresas = [];
      }
    });
  }
  obtenerBodegas(){
  //obtenerBodegas(){
    this.dataService.getAllBodegas().subscribe({
      next: (bodegas) =>{
        this.bodegas = bodegas;
      },
      error:(e: HttpErrorResponse) =>{
        console.log(e);
      }
    })
  }

  obtenerAnalistas(){
    this.dataService.getDatosAnalistas().subscribe({
      next:(analistas) =>{
        this.analistas = analistas;
        console.log(this.analistas)
      },
      error:(e: HttpErrorResponse) =>{
        console.log(e);
      }
    });
  }

  obtenerAsignaciones(){
    this.dataService.getDatosAsignaciones().subscribe({
      next:(asignacion) =>{
        this.asignaciones = asignacion;
      },
      error:(e: HttpErrorResponse) =>{
        console.log(e);
      }
    });
  }

  pasarASelect(valor:any, i:any){
    console.log("index: "+valor);
    this.bodegasSelects[i]=this.bodegas.filter((b)=>{if(b.manipuladora == valor) return b; })
    console.log(this.bodegasSelects);
  }

  asignar(bodega:any, analista:any){
    //Guardar la asignación en la base de datos
    //Pasarle la bodega
    //Recargar la celda de asignacion
    this.dataService.putAsignacion(analista, bodega);
    setTimeout(()=>{
      this.asignaciones = [];
      this.obtenerAsignaciones();
    },1000);
  }
  // displayedColumns: string[] = ['analista','comuna','hechos','total'];
    displayedColumns: string[] = ['analista','empresa','bodega','hechos'];
  dataSource = ELEMENT_DATA;

  someMethod(a:any,b:any){
    console.log(`${a}`);
  }
}
