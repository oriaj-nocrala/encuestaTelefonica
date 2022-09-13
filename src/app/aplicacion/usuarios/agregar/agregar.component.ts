import { Usuario } from './../../shared/modelos/usuario';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {Component, Inject} from '@angular/core';
import {DataService} from '../../shared/servicios/data.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-add.dialog',
  templateUrl: '../../usuarios/agregar/agregar.component.html',
  styleUrls: ['../../usuarios/agregar/agregar.component.scss']
})

export class AddDialogComponent {
  constructor(public dialogRef: MatDialogRef<AddDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Usuario,
              public dataService: DataService) { }

  formControl = new FormControl('', [
    Validators.required,
     Validators.email,
  ]);

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Campo requerido' :
      this.formControl.hasError('email') ? 'Correo electrónico inválido' :
        '';
  }

  submit() {
  // empty stuff
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public confirmAdd(): void {
    this.dataService.addIssue(this.data);
  }

    checkRut(rut:any) {
      console.log(rut)
    // Despejar Puntos
    let valor = rut.value.replace('.','');
    // Despejar Guión
    valor = valor.replace('-','');
    // Aislar Cuerpo y Dígito Verificador
    let cuerpo = valor.slice(0,-1);
    let dv = valor.slice(-1).toUpperCase();

    // Formatear RUN
    rut.value = cuerpo + '-'+ dv

    // Si no cumple con el mínimo ej. (n.nnn.nnn)
    if(cuerpo.length < 7) { rut.setCustomValidity("RUT Incompleto"); return false;}

    // Calcular Dígito Verificador
    let suma = 0;
    let multiplo = 2;

    // Para cada dígito del Cuerpo
    for(let i=1;i<=cuerpo.length;i++) {

        // Obtener su Producto con el Múltiplo Correspondiente
        let index = multiplo * valor.charAt(cuerpo.length - i);

        // Sumar al Contador General
        suma = suma + index;

        // Consolidar Múltiplo dentro del rango [2,7]
        if(multiplo < 7) { multiplo = multiplo + 1; } else { multiplo = 2; }

    }

    // Calcular Dígito Verificador en base al Módulo 11
    let dvEsperado = 11 - (suma % 11);

    // Casos Especiales (0 y K)
    dv = (dv == 'K')?10:dv;
    dv = (dv == 0)?11:dv;

    // Validar que el Cuerpo coincide con su Dígito Verificador
    if(dvEsperado != dv) { rut.setCustomValidity("RUT Inválido"); return false; }

    // Si todo sale bien, eliminar errores (decretar que es válido)
    rut.setCustomValidity('');

    return true;
  }

  numberOnly(event:any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
}
