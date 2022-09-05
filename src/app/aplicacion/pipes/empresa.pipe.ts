import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name:'empresa'
})
export class EmpresaPipe implements PipeTransform{
  transform(n:number): string {
    switch(n){
      case 0: return 'Alimentaciones'; break;
      case 1: return 'Fedir'; break;
      case 2: return 'Merken'; break;
      case 3: return 'Saludable'; break;
      default: return '';
    }
  }
}