import { DataService } from './../shared/servicios/data.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from 'src/app/login/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  datosAsignaciones:any[] = [];
  posiblesRespuestas:any[] = [];
  preguntas:any[] = [];
  checked:boolean = false;
  constructor( public dataService: DataService,
    private authService:AuthService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.obtenerDatosPadron(this.authService.auth._id); //Por bodega si el usuario está asignado
    this.obtenerPosiblesRespuestas();
    this.obtenerPreguntas();
    this.obtenerDatosAsignaciones();

  }

  obtenerDatosPadron(analista:any){ //Obtiene 5 valores aleatorios del padrón
    this.dataService.getDatosPadron(analista).subscribe({
      next:(padron) =>{
        this.datosPadron = padron;
      },
      error:(e: HttpErrorResponse) =>{
        console.log(e);
      }
    });
  }

  obtenerDatosAsignaciones(){ //Una asignación por usuario
    this.dataService.getDatosAsignaciones().subscribe({
      next:(asignaciones) =>{
        this.datosAsignaciones = asignaciones;
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
    this.dataService.addRespuestas(this.authService.auth._id,this.datosPadron[0]._id, this.preguntas, [this.p1,this.p2,this.p3,this.p4,this.p5]);
    this.datosPadron.shift();
    this._snackBar.open("Se ha guardado correctamente 😁👍✅", undefined, {duration:2000});
    this.p1=null;
    this.p2=null;
    this.p3=null;
    this.p4=null;
    this.p5=null;
  }

  espera(){
    this.datosPadron.shift();
    this._snackBar.open("Se ha puesto en espera 🤯👎", undefined, {duration:2000});
  }

  algo(event:any){
    console.log(event)
  }

}
