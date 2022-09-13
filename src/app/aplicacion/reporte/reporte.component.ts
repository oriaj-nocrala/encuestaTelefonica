import { DataService } from './../shared/servicios/data.service';
import { Component} from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.scss']
})

export class ReporteComponent {

  progress:number = 45;
  data:any[] = [];

  constructor( private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getDatosRespuestas().subscribe({next: data=> this.data= data,error: err=>console.log});
    console.log(this.data);
  }

  procesarDatos(data:any[]){

  }


  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ], //Últimos 5 días
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A' }, //El nombre del analista en el label y en la data separada por días
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' } //otro analista...
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };
}
