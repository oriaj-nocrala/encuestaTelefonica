import { DataService } from './../shared/servicios/data.service';
import { Component, ViewChild} from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import {Analista, Respuesta, RespuestaCruzada, RespuestaXAnalista} from '../shared/interfaces/encuesta.interface'

import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { Observable, switchMap, combineLatest } from 'rxjs';
import { MatLabel } from '@angular/material/form-field';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.scss']
})

export class ReporteComponent {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  progress:number = 45;
  data:RespuestaCruzada[] = [];
  fecha:Date = new Date();
  fechas: Date[] = [];
  analistas:Analista[] = [];

  nombresAnalistas:string[] = [];
  

  constructor( private dataService: DataService) { }
  
  
  ngOnInit(): void {
    this.getDatosAnalistas();
    this.getDatosRespuestas();

    
    for(let i = 1; i <= 7; i++){
      this.fechas.push( new Date(new Date().setDate(new Date().getDate()-i) ) ); //El día de ayer.
    }
    for(let i = 0; i < 7; i++)
    console.log(this.fechas[i]);
  }
  
  procesarDatos(data:any[]){
    
  }
  
  clickBoton(){
    console.log(this.data[0].analista._id);
    this.data.forEach(d => {
      
    })
  }


  public barChartLegend = true;
  public barChartPlugins = [DataLabelsPlugin];
  public barChartType: ChartType = 'bar';
  public barChartData: ChartData<'bar'> = {
    labels: this.nombresAnalistas, //Últimos 5 días
    datasets: [
      // { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A' }, //El nombre del analista en el label y en la data separada por días
      // { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' } //otro analista...
      {
        label:"Analistas",
        data:[]
      }
    ]
  };

  //[ 'katherine' , 'waleska', 'analista3']
  //[ katherine, waleska, analista3  ]

  getDatosAnalistas(){    // this.dataService.getDatosAnalistas().pipe(

    // const combinado = combineLatest(
    //   this.dataService.getDatosAnalistas(),
    //   this.dataService.getDatosRespuestas()
    // ).subscribe(data => {
    //   if()
    // })



    
    //   switchMap( (anal) => {
    //     let a:RespuestaCruzada[] = [];
    //     anal.forEach( a => {
    //       this.dataService.getDatosRespuestas();
    //     })
    //     return a;
    //   })
    // ).subscribe(console.log)
    //No es lo que quiero...


      this.dataService.getCountRespuestasPorAnalista().subscribe({next: (data) => {
        data.forEach(d => {
          this.nombresAnalistas.push(`${d.analista.nombre} ${d.analista.apellido}`);
          this.barChartData.datasets[0].data.push(d.count);
          console.log(this.barChartData.datasets[0]);
        })
        this.chart?.update();
      }, error: console.log
    })
  }


  getDatosRespuestas(){
    this.dataService.getDatosRespuestas().subscribe({next: (data:RespuestaCruzada[])=>{
      data.forEach((d)=>{
        
      })
    },error: err=>console.log});
  }

  nombresAnalista(){

  }
  calcularTotalAnalista(analista_id:string):number{
    return 0;
  }
  

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales:{
      xAxes:{},
      yAxes:{
        ticks: {
          display:true,
          callback: label => (Number(label) % 1 === 0)? label: ''
        }
      }
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

  public actualizar(): void {
    // Only Change 3 values
    // this.barChartData.datasets[0].data = [
    //   Math.round(Math.random() * 100),
    //   59,
    //   80,
    //   Math.round(Math.random() * 100),
    //   56,
    //   Math.round(Math.random() * 100),
    //   40 ];

    this.chart?.update();
  }
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    // console.log(event, active);
  }

}