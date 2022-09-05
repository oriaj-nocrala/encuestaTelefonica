import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Usuario, Issue} from '../modelos/usuario';
import { Empresa } from '../modelos/empresa';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable()
export class DataService {
  private readonly API_URL = 'http://localhost:3000';

  dataChange: BehaviorSubject<Usuario[]> = new BehaviorSubject<Usuario[]>([]);
  // empresas: BehaviorSubject<Empresa[]> = new BehaviorSubject<Empresa[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;

  constructor (private httpClient: HttpClient) {}

  get data(): Usuario[] {
    return this.dataChange.value;
  }

  getDialogData() {
    return this.dialogData;
  }

  /** CRUD METHODS */
  getAllIssues(): void {
    this.httpClient.get<Usuario[]>(`${this.API_URL}/getDatosUsuarios`).subscribe(data => {
        this.dataChange.next(data);
      },
      (error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
      });
  }

  getDatosUsuarios(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(`${this.API_URL}/getDatosUsuarios`)
  }

  // DEMO ONLY, you can find working methods below
  // addIssue (usuario: Usuario): void {
  //   this.dialogData = usuario;
  // }


  // UPDATE, PUT METHOD
  addIssue(usuario: Usuario): void {
    this.httpClient.put(`${this.API_URL}/putUsuario?rut=${usuario.rut}&nombre=${usuario.nombre}&apellido=${usuario.apellido}&correo=${usuario.correo}&telefono=${usuario.telefono}&user=${usuario.user}`, usuario).subscribe(data => {
        this.dialogData = usuario;
        // this.toasterService.showToaster('Successfully edited', 3000);
        console.log("Bakán.");
      },
      (err: HttpErrorResponse) => {
        // this.toasterService.showToaster('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
        console.log("De perro.");
      }
    );
  }

  addRespuestas(usuario_id: string, padron_id:string,preguntas:any[], respuestas:any[]){
    this.httpClient.put(`${this.API_URL}/putRespuesta?analista=${usuario_id}&padron=${padron_id}&pregunta1=${preguntas[0]._id}&pregunta2=${preguntas[1]._id}&pregunta3=${preguntas[2]._id}&pregunta4=${preguntas[3]._id}&pregunta5=${preguntas[4]._id}&respuesta1=${respuestas[0]}&respuesta2=${respuestas[1]}&respuesta3=${respuestas[2]}&respuesta4=${respuestas[3]}&respuesta5=${respuestas[4]}`,'a').subscribe(data => {
      console.log("Bakán");
    }),
    (err: HttpErrorResponse) =>{
      console.log("De perro.");
    }
  }

  getDatosPreguntas():Observable<any[]>{
    return this.httpClient.get<any[]>(`${this.API_URL}/getDatosPreguntas`);
  }
  getAllEmpresas(): Observable<Empresa[]> {
    return this.httpClient.get<Empresa[]>(`${this.API_URL}/getDatosEmpresas`);
  }

  //getAllBodegas(manipuladora:number): Observable<String[]> {
  getAllBodegas(): Observable<String[]> {
    return this.httpClient.get<String[]>(`${this.API_URL}/getDatosBodegas`);
  }

  getDatosAnalistas(): Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(`${this.API_URL}/getDatosAnalistas`);
  }

  getDatosAsignaciones(): Observable<any[]>{
    return this.httpClient.get<any[]>(`${this.API_URL}/getDatosAsignaciones`);
  }

  getDatosAsignaciones2(): Observable<any[]>{
    return this.httpClient.get<any[]>(`${this.API_URL}/getDatosAsignaciones2`);
  }

  getDatosPadron():Observable<any[]>{
    return this.httpClient.get<any[]>(`${this.API_URL}/getDatosPadron`);
  }

  getPosiblesRespuestas():Observable<any[]>{
    return this.httpClient.get<any[]>(`${this.API_URL}/getPosiblesRespuestas`);
  }

  updateIssue (usuario: Usuario): void {
    this.dialogData = usuario;
  }

  // deleteIssue (rut: number): void {
  //   console.log(rut);
  // }

  deleteIssue(rut: number): void {
    this.httpClient.delete(`${this.API_URL}/eliminarUsuarioPorRut?rut=${rut}`).subscribe(data => {
      console.log(data);
      console.log("Bakán.");
      },
      (err: HttpErrorResponse) => {
        console.log("De perro.");      }
    );
  }


  //NUEVOS METODOS

  addUsuario(usuario: Usuario): void {
    this.dialogData = usuario;
  }

  updateUsuario(usuario: Usuario): void{
    this.dialogData = usuario
  }

  deleteUsuarioe (rut: number): void {
    console.log(rut);
  }

}



/* REAL LIFE CRUD Methods I've used in my projects. ToasterService uses Material Toasts for displaying messages:

    // ADD, POST METHOD
    addItem(kanbanItem: KanbanItem): void {
    this.httpClient.post(this.API_URL, kanbanItem).subscribe(data => {
      this.dialogData = kanbanItem;
      this.toasterService.showToaster('Successfully added', 3000);
      },
      (err: HttpErrorResponse) => {
      this.toasterService.showToaster('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
    });
   }

    // UPDATE, PUT METHOD
     updateItem(kanbanItem: KanbanItem): void {
    this.httpClient.put(this.API_URL + kanbanItem.id, kanbanItem).subscribe(data => {
        this.dialogData = kanbanItem;
        this.toasterService.showToaster('Successfully edited', 3000);
      },
      (err: HttpErrorResponse) => {
        this.toasterService.showToaster('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
      }
    );
  }

  // DELETE METHOD
  deleteItem(id: number): void {
    this.httpClient.delete(this.API_URL + id).subscribe(data => {
      console.log(data['']);
        this.toasterService.showToaster('Successfully deleted', 3000);
      },
      (err: HttpErrorResponse) => {
        this.toasterService.showToaster('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
      }
    );
  }
*/




