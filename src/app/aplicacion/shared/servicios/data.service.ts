import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Usuario} from '../modelos/usuario';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable()
export class DataService {
  private readonly API_URL = 'http://localhost:3000';

  dataChange: BehaviorSubject<Usuario[]> = new BehaviorSubject<Usuario[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;

  constructor (private httpClient: HttpClient) {}

  get data(): Usuario[] {
    return this.dataChange.value;
  }

  getDialogData() {
    return this.dialogData;
  }

  /** CRUD METHODS */
  getAllIssues(): void {
    this.httpClient.get<Usuario[]>(`${this.API_URL}/getDatosUsuarios`).subscribe(data => {
        this.dataChange.next(data);
      },
      (error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
      });
  }

  addItem(u: Usuario): void {
    this.httpClient.put(`${this.API_URL}/putUsuario`, u).subscribe(data => {
      this.dialogData = u;
      alert("bien");
      },
      (err: HttpErrorResponse) => {
      alert('Error occurred. Details: ' + err.name + ' ' + err.message);
    });
   }

    // UPDATE, PUT METHOD
    updateItem(u: Usuario): void {
      this.httpClient.put(this.API_URL + u.rut, u).subscribe(data => {
          this.dialogData = u;
          alert("bien");
        },
        (err: HttpErrorResponse) => {
          alert('Error occurred. Details: ' + err.name + ' ' + err.message);
        }
      );
    }

    deleteItem(id: number): void {
      this.httpClient.delete(`${this.API_URL}/eliminarUsuarioPorRut` + id).subscribe(data => {
        console.log(data);
        alert("bien");
        },
        (err: HttpErrorResponse) => {
          alert('Error occurred. Details: ' + err.name + ' ' + err.message);
        }
      );
    }

  deleteIssue (id: number): void {
    console.log(id);
  }
}



/* REAL LIFE CRUD Methods I've used in my projects. ToasterService uses Material Toasts for displaying messages:

    // ADD, POST METHOD
    addItem(kanbanItem: KanbanItem): void {
    this.httpClient.post(this.API_URL, kanbanItem).subscribe(data => {
      this.dialogData = kanbanItem;
      this.toasterService.showToaster('Successfully added', 3000);
      },
      (err: HttpErrorResponse) => {
      this.toasterService.showToaster('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
    });
   }

    // UPDATE, PUT METHOD
     updateItem(kanbanItem: KanbanItem): void {
    this.httpClient.put(this.API_URL + kanbanItem.id, kanbanItem).subscribe(data => {
        this.dialogData = kanbanItem;
        this.toasterService.showToaster('Successfully edited', 3000);
      },
      (err: HttpErrorResponse) => {
        this.toasterService.showToaster('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
      }
    );
  }

  // DELETE METHOD
  deleteItem(id: number): void {
    this.httpClient.delete(this.API_URL + id).subscribe(data => {
      console.log(data['']);
        this.toasterService.showToaster('Successfully deleted', 3000);
      },
      (err: HttpErrorResponse) => {
        this.toasterService.showToaster('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
      }
    );
  }
*/




