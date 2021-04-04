import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CuentaConsignar } from './clienteCuenta';

@Injectable({
  providedIn: 'root'
})
export class ConsignacionService {
  myAppUrl = 'https://localhost:44345/';
  myApiUrl1 = 'api/Cuenta/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }

  guardarConsignacion(accion: number, registro: CuentaConsignar): Observable<CuentaConsignar> {
    return this.http.post<CuentaConsignar>(this.myAppUrl + this.myApiUrl1+ "?accion="+accion, registro, this.httpOptions);
  }

}
