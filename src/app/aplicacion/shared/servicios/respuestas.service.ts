import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RespuestaCruzada } from '../interfaces/encuesta.interface';

@Injectable({
  providedIn: 'root'
})
export class RespuestasService {

  private readonly API_URL = environment.baseUrl;

  dataChange: BehaviorSubject<RespuestaCruzada[]> = new BehaviorSubject<RespuestaCruzada[]>([]);
  dialogData: any;
  constructor( private httpClient: HttpClient) { }

  get data(): RespuestaCruzada[]{
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }


  getAllIssues(): void {
    this.httpClient
      .get<RespuestaCruzada[]>(`${this.API_URL}/getDatosRespuestas`)
      .subscribe({
        next: (data) => {
          this.dataChange.next(data);
        },
        error: (error: HttpErrorResponse) => {
          console.log(error.name + ' ' + error.message);
        },
      });
  }


}
