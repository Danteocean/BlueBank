import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CuentaRetirar } from './clienteCuenta';

@Injectable({
  providedIn: 'root'
})
export class RetirarService {
  myAppUrl = 'https://localhost:44345/';
  myApiUrl1 = 'api/Cuenta/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }

  guardarRetiro(accion: number, registro: CuentaRetirar): Observable<CuentaRetirar> {
    return this.http.post<CuentaRetirar>(this.myAppUrl + this.myApiUrl1+ "?accion="+accion, registro, this.httpOptions);

  }
}
