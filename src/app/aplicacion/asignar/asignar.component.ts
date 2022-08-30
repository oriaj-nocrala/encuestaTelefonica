import { Component, OnInit } from '@angular/core';

export interface Asignacion {
  analista: string,
  empresa: string,
  comuna: string,
  hechos: number,
  total: number
}
const ELEMENT_DATA: Asignacion[] = [
  {analista: 'Javiera Sepúlveda', empresa:"Alimentaciones", comuna:"San Bernardo", hechos:50, total:150},
  {analista: 'Carolina Frattasio', empresa:"Merken", comuna:'Pudahuel', hechos:100, total:240},
  {analista: 'Katherine Orellana', empresa:"Fedir", comuna:'Pudahuel', hechos:23, total:87}
];

@Component({
  selector: 'app-asignar',
  templateUrl: './asignar.component.html',
  styleUrls: ['./asignar.component.scss']
})

export class AsignarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['analista','empresa','comuna','hechos','total'];
  dataSource = ELEMENT_DATA;
}
