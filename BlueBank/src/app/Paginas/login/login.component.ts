import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from './login';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  clientesLogin!: FormGroup;
  id: any;
  mensaje:any;
  cerrarAlerta = false;
  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) {
    this.clientesLogin = this.fb.group({
      usuario: ['', Validators.required],
      pass: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }
  LoginComprobacion() {
    const login: Login = {
      usuario: this.clientesLogin.get('usuario')?.value,
      pass: this.clientesLogin.get('pass')?.value,

    };
    this.loginService.ValidarCliente(login.usuario, login.pass).subscribe(data => {
      this.id = data;
      sessionStorage.setItem('idusuario', this.id);
      this.router.navigate(['/Cliente']);

    }, err => {
      if (err.status == 400) {
        console.log(err.error + ' error todo');
        this.mensaje = "Usuario o contraseña incorrecta";
        this.cerrarAlerta = true;
        this.clear();
      }
    });
  }
  clear() {
    this.clientesLogin.reset();
  }
}
