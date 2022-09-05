import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { Usuario } from 'src/app/aplicacion/shared/modelos/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = 'http://localhost:3000';
  private _auth: Usuario | undefined;

  get auth():Usuario{
    return {...this._auth!}
  }
  constructor( private http: HttpClient) { }


  verificaAutenticacion(): Observable<boolean>{
    if(!localStorage.getItem('token')) {
      return of(false);
    }
    console.log(localStorage.getItem('token'));
    return this.http.get<Usuario>(`${this.baseUrl}/getUsuarioPorId?id=${localStorage.getItem('token')}`)
    .pipe( map (auth => {
      this._auth = auth
      return true;
    }));
  }

  login(user:string) {
    return this.http.get<Usuario>(`${this.baseUrl}/getUsuarioPorUsername?user=${user}`)
    .pipe(
      tap(auth => this._auth = auth),
      tap(auth => localStorage.setItem('token', auth._id))
    );
  }
  logout(){
    this._auth = undefined;
  }
}
