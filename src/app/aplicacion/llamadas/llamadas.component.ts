import { FormControl, FormGroup } from '@angular/forms';
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
  public fg: FormGroup = new FormGroup({
    availabilityGroup: new FormControl()
  });
  p1:any;
  p2:any;
  p3:any;
  p4:any;
  datosPadron:any[] = [];
  datosAsignaciones:any[] = [];
  posiblesRespuestas:any[] = [];
  preguntas:any[] = [];
  checked:boolean = false;
  otroChecked:boolean = false;
  otro:string = ''; //radiobutton otro
  correo:string = ''; //radiobutton correo
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
    console.log(this.correo.length)
    if(!(this.p1&& this.p2&& this.p3&& this.p4))
      return this._snackBar.open("Debe marcar todas las opciones 😕", undefined, {duration:2000});
    if(this.correo.length > 10 && this.p3==="631591ba9240c113e4e450dc")
      console.log("Hola");
    this.dataService.addRespuestas(this.authService.auth._id,this.datosPadron[0]._id, this.preguntas, [this.p1,this.p2,this.p3,this.p4,],this.otro,this.correo);
    this.datosPadron.shift();
    this.p1=null;
    this.p2=null;
    this.p3=null;
    this.p4=null;
    this.otro='';
    this.correo='';
    return this._snackBar.open("Se ha guardado correctamente 😁👍✅", undefined, {duration:2000});
  }

  espera(){
    this.datosPadron.shift();
    this._snackBar.open("Se ha puesto en espera 🤯👎", undefined, {duration:2000});
  }

  algo(event:any){ //onChange de otro
    console.log(event)
    this.otroChecked
  }

}
