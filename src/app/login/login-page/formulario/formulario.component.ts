import { AuthService } from './../../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { DataService } from './../../../aplicacion/shared/servicios/data.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Data, Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {
  loginForm:FormGroup;
  constructor(private router: Router,
    private authService:AuthService) {
    this.loginForm = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  submit(userlogin:any){
    this.authService.login(userlogin.userName).subscribe({
      next:(u)=>{
        if(u.user == userlogin.userName)
          if(u.pass == userlogin.password)
            this.router.navigate(['/aplicacion/reporte']);

      },
      error(e:HttpErrorResponse){
        console.log(e);
      }
    });
  console.log(userlogin);
  }

}
