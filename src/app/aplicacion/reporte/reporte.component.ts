import { DataService } from './../shared/servicios/data.service';
import { Component, ViewChild} from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.scss']
})

export class ReporteComponent {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  progress:number = 45;
  data:any[] = [];
  fecha:Date = new Date();
  fechas: Date[] = [];
  

  constructor( private dataService: DataService) { }
  
  
  ngOnInit(): void {
    this.dataService.getDatosRespuestas().subscribe({next: data=> this.data=data,error: err=>console.log});
    console.log(this.data);
    for(let i = 1; i <= 7; i++){
      this.fechas.push( new Date(new Date().setDate(new Date().getDate()-i) ) ); //El día de ayer.
    }
    for(let i = 0; i < 7; i++)
      console.log(this.fechas[i]);
  }

  procesarDatos(data:any[]){

  }


  public barChartLegend = true;
  public barChartPlugins = [DataLabelsPlugin];
  public barChartType: ChartType = 'bar';
  public barChartData: ChartData<'bar'> = {
    labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ], //Últimos 5 días
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A' }, //El nombre del analista en el label y en la data separada por días
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' } //otro analista...
    ]
  };

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales:{
      x:{},
      y:{min:10}
    },
    plugins: {
      legend: {
        display:true,
      },
      datalabels: {
        anchor:'end',
        align:'end'
      }
    }
  };

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      40 ];

    this.chart?.update();
  }
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    // console.log(event, active);
  }

}