import { DataService } from './../shared/servicios/data.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-llamadas',
  templateUrl: './llamadas.component.html',
  styleUrls: ['./llamadas.component.scss']
})
export class LlamadasComponent implements OnInit {

  p1:any;
  p2:any;
  p3:any;
  p4:any;
  p5:any;
  datosPadron:any[] = [];
  posiblesRespuestas:any[] = [];
  preguntas:any[] = [];
  constructor( public dataService: DataService) { }

  ngOnInit(): void {
    this.obtenerDatosPadron();
    this.obtenerPosiblesRespuestas();
    this.obtenerPreguntas();
  }

  obtenerDatosPadron(){
    this.dataService.getDatosPadron().subscribe({
      next:(padron) =>{
        this.datosPadron = padron;
      },
      error:(e: HttpErrorResponse) =>{
        console.log(e);
      }
    });
  }

  obtenerPosiblesRespuestas(){
    this.dataService.getPosiblesRespuestas().subscribe({
      next:(pr) =>{
        this.posiblesRespuestas = pr;
      },
      error:(e: HttpErrorResponse) =>{
        console.log(e);
      }
    });
  }

  obtenerPreguntas(){
    this.dataService.getDatosPreguntas().subscribe({
      next:(pr) =>{
        this.preguntas = pr;
        console.log(pr);
      },
      error:(e: HttpErrorResponse) =>{
        console.log(e);
      }
    });
  }


  guardar(){
    this.dataService.addRespuestas('6312c04fa3a101b316a47037',this.datosPadron[0]._id, this.preguntas, [this.p1,this.p2,this.p3,this.p4,this.p5]);
  }

  espera(){

  }

  setp1(event:any){
    this.posiblesRespuestas.forEach(pr=>{
      if(pr.respuesta == event) this.p1 = pr._id;
    })
  }
  setp2(event:any){
    this.posiblesRespuestas.forEach(pr=>{
      if(pr.respuesta == event) this.p2 = pr._id;
    })
  }
  setp3(event:any){
    this.posiblesRespuestas.forEach(pr=>{
      if(pr.respuesta == event) this.p3 = pr._id;
    })
  }
  setp4(event:any){
    this.posiblesRespuestas.forEach(pr=>{
      if(pr.respuesta == event) this.p4 = pr._id;
    })
  }
  setp5(event:any){
    this.posiblesRespuestas.forEach(pr=>{
      if(pr.respuesta == event) this.p5 = pr._id;
    })
  }

}
