import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../shared/servicios/data.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Usuario } from '../shared/modelos/usuario';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, fromEvent, merge, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RespuestasService } from '../shared/servicios/respuestas.service';
import { RespuestaCruzada } from '../shared/interfaces/encuesta.interface';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.scss'],
})
export class ReporteComponent implements OnInit {
  displayedColumns = [
    'fecha',
    'analista',
    'rut_padron',
    'nombre_padron',
    'correo_padron',
    'telefono_padron',
    'empresa_padron',
    'bodega_padron',
  ];
  exampleDatabase!: RespuestasService | null;
  dataSource!: ExampleDataSource | null;
  index!: number;
  rut!: number;

  constructor(
    public httpClient: HttpClient,
    public dialog: MatDialog,
    public respuestasService: RespuestasService
  ) {}

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild('filter', { static: true }) filter!: ElementRef;

  ngOnInit() {
    this.loadData();
  }

  refresh() {
    this.loadData();
  }

  private refreshTable() {
    // Refreshing table using paginator
    // Thanks yeager-j for tips
    // https://github.com/marinantonio/angular-mat-table-crud/issues/12
    this.paginator._changePageSize(this.paginator.pageSize);
  }


  public loadData() {
    this.exampleDatabase = new RespuestasService(this.httpClient);
    this.dataSource = new ExampleDataSource(
      this.exampleDatabase,
      this.paginator,
      this.sort
    );
    fromEvent(this.filter.nativeElement, 'keyup')
      // .debounceTime(150)
      // .distinctUntilChanged()
      .subscribe(() => {
        if (!this.dataSource) {
          return;
        }
        this.dataSource.filter = this.filter.nativeElement.value;
      });
  }
}

export class ExampleDataSource extends DataSource<RespuestaCruzada> {
  _filterChange = new BehaviorSubject('');

  get filter(): string {
    return this._filterChange.value;
  }

  set filter(filter: string) {
    this._filterChange.next(filter);
  }

  filteredData: RespuestaCruzada[] = [];
  renderedData: RespuestaCruzada[] = [];

  constructor(
    public _exampleDatabase: RespuestasService,
    public _paginator: MatPaginator,
    public _sort: MatSort
  ) {
    super();
    // Reset to the first page when the user changes the filter.
    this._filterChange.subscribe(() => (this._paginator.pageIndex = 0));
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<RespuestaCruzada[]> {
    this._sort = new MatSort();
    // Listen for any changes in the base data, sorting, filtering, or pagination
    const displayDataChanges = [
      this._exampleDatabase.dataChange,
      this._sort.sortChange,
      this._filterChange,
      this._paginator.page,
    ];

    this._exampleDatabase.getAllIssues();

    return merge(...displayDataChanges).pipe(
      map(() => {
        // Filter data
        this.filteredData = this._exampleDatabase.data
          .slice()
          .filter((usuario: RespuestaCruzada) => {
            const searchStr = (
              usuario.analista.nombre +
              usuario.analista.apellido +
              usuario.padron.rut +
              usuario.padron.nombre
            ).toLowerCase();
            return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
          });

        // Sort filtered data
        const sortedData = this.sortData
          ? this.sortData(this.filteredData.slice())
          : [];

        // Grab the page's slice of the filtered sorted data.
        const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
        this.renderedData = sortedData.splice(
          startIndex,
          this._paginator.pageSize
        );
        return this.renderedData;
      })
    );
  }

  disconnect() {}

  /** Returns a sorted copy of the database data. */
  sortData(data: RespuestaCruzada[]): RespuestaCruzada[] {
    if (!this._sort.active || this._sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      let propertyA: Date | number | string = '';
      let propertyB: Date | number | string = '';

      switch (this._sort.active) {
        case 'fecha':
          [propertyA, propertyB] = [a.hora_creacion, b.hora_creacion];
          break;
        case 'analista':
          [propertyA, propertyB] = [a.analista.nombre + a.analista.apellido , b.analista.nombre + b.analista.apellido];
          break;
        case 'rut_padron':
          [propertyA, propertyB] = [a.padron.rut, b.padron.rut];
          break;
        case 'nombre_padron':
          [propertyA, propertyB] = [a.padron.nombre, b.padron.nombre];
          break;
        case 'correo_padron':
          [propertyA, propertyB] = [a.padron.email, b.padron.email];
          break;
        case 'bodega_padron':
          [propertyA, propertyB] = [a.padron.bodega, b.padron.bodega];
          break;
      }

      const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (
        (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1)
      );
    });
  }
}
