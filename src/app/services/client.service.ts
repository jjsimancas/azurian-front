import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Client} from '../models/Client';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  clientRequest: ClientRequest;
  listClients = 'findClients';
  clientByRun = 'findClient';
  apiUrl = 'http://localhost:8080/azurian/';

  static handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Codigo de error: ${error.status}\nMensaje: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.apiUrl + this.listClients)
        .pipe(
            retry(0),
            catchError(ClientService.handleError)
        );
  }
}
