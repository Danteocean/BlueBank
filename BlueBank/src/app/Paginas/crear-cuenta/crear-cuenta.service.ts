import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CuentaCrear } from './clienteCuenta';
import { RegistroCuenta } from './RegistrarCliente';

@Injectable({
  providedIn: 'root'
})
export class CrearCuentaService {
  myAppUrl = 'https://localhost:44345/';
  myApiUrl = 'api/Cliente';
  myApiUrl1 = 'api/Cuenta/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }

  consultaCliente(id:number):Observable<RegistroCuenta>{
    return this.http.get<RegistroCuenta>(this.myAppUrl + this.myApiUrl + '/' + id );
  }
  guardarcuenta(accion: number,registro: CuentaCrear):Observable<CuentaCrear>{
    return this.http.post<CuentaCrear>(this.myAppUrl + this.myApiUrl1+ "?accion="+accion, registro, this.httpOptions);
  }
}
