import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  myAppUrl = 'https://localhost:44345/';
  myApiUrl = 'api/Cuenta/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }

  obtenerCuentas(id:number): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.myAppUrl + this.myApiUrl + '?id=' + id );

  }

}
