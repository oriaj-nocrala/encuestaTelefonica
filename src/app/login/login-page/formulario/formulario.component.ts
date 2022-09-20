import { AuthService } from './../../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { DataService } from './../../../aplicacion/shared/servicios/data.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Data, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {
  loginForm:FormGroup;
  constructor(private router: Router,
    private authService:AuthService,
    private _snackBar: MatSnackBar) {
    this.loginForm = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  submit(userlogin:any){
    this.authService.login(userlogin.userName).subscribe({
      next:(u)=>{
        if(u.user == userlogin.userName && u.pass == userlogin.password){
          if(u.tipo == '6311110c9582ca5ed94ede0d'){
            this.router.navigate(['/aplicacion/asignar']);}
          else{
            this.router.navigate(['/aplicacion/llamadas']);}
          }
          this._snackBar.open('Login correcto 😅', 'Ok', {duration:2000});
      },
      error(e:HttpErrorResponse){
        console.log(e);
      }
    });
    this._snackBar.open("Login incorrecto 😞", 'Ok', {duration:2000});
  console.log(userlogin);
  }

}
