import { DataService } from './../shared/servicios/data.service';
import { Component, OnInit, ViewChild} from '@angular/core';

import {Analista, Respuesta, RespuestaCruzada, RespuestaXAnalista} from '../shared/interfaces/encuesta.interface'



@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.scss']
})

export class ReporteComponent implements OnInit {

  respuestas:Respuesta[] = [];

  constructor( private dataService: DataService) { }
  
  
  ngOnInit(): void {
    
    this.dataService.getDatosRespuestas().subscribe( data => {
      this.respuestas = data;
    });
  }

  
  procesarDatos(data:any[]){
    
  }
  
  clickBoton(){
    
  }
}