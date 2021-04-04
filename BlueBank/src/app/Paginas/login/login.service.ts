import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  myAppUrl = 'https://localhost:44345/';
  myApiUrl = 'api/Login/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }

  ValidarCliente(NombreUsuario: String, contraseña: String): Observable<Login> {
    return this.http.get<Login>(this.myAppUrl + this.myApiUrl + '?NombreUsuario=' + NombreUsuario + '&pass=' + contraseña);
  }

}
