
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Registro } from './RegistrarCliente';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  myAppUrl = 'https://localhost:44345/';
  myApiUrl = 'api/Cliente/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }

  guardarClientes(accion: number,registro: Registro) : Observable<Registro>{
    return this.http.post<Registro>(this.myAppUrl + this.myApiUrl+ "?accion="+accion, registro, this.httpOptions);

  }
}
