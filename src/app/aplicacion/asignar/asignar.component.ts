import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataService } from './../shared/servicios/data.service';
import { Component, OnInit } from '@angular/core';
import { Empresa } from '../shared/modelos/empresa';
import { Usuario } from '../shared/modelos/usuario';

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

  constructor(public dataService: DataService) { }

  empresas:Empresa[]  = [];
  bodegas: any[] = [];
  bodegasSelects: any[] = [];
  analistas:Usuario[] = [];
  asignaciones:any[] = [];
  datos: any[] = [];



  ngOnInit(): void {
    this.dataService.getAllIssues();
    this.obtenerEmpresas();
    this.obtenerBodegas();
    this.obtenerAsignaciones2();
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

  obtenerAsignaciones2(){
    this.dataService.getDatosAsignaciones2().subscribe({
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

  asignar(comuna:any, index:any){

    console.log(comuna, index);
  }
  // displayedColumns: string[] = ['analista','comuna','hechos','total'];
    displayedColumns: string[] = ['analista','empresa','bodega','hechos'];
  dataSource = ELEMENT_DATA;

  someMethod(a:any,b:any){
    console.log(`${a}`);
  }
}
