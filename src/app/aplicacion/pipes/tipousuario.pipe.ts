import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name:'tipousuario'
})
export class TipoUsuarioPipe implements PipeTransform{
  transform(txt:string): string {
    switch(txt){
      case '6311110c9582ca5ed94ede0d': return 'Administrador'; break;
      case '6311110c9582ca5ed94ede0e': return 'Analista'; break;
      default: return '';
    }
  }
}