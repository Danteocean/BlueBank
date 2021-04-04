import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Registro } from './RegistrarCliente';
import { RegistroService } from './registro.service';
import { CrearCuentaService } from '../crear-cuenta/crear-cuenta.service';
@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  clientesLogin!: FormGroup;
  idUsuario!: any;
  nombre!: any;
  constructor(private fb: FormBuilder, private registroService: RegistroService, private router: Router,
    private CrearCuentaService: CrearCuentaService) {
    this.clientesLogin = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      usuario: ['', Validators.required],
      pass: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }
  guardarcliente() {
    const cliente: Registro = {
      Nombres: this.clientesLogin.get('nombre')?.value,
      Apellidos: this.clientesLogin.get('apellido')?.value,
      Usuario: this.clientesLogin.get('usuario')?.value,
      Pass: this.clientesLogin.get('pass')?.value,
    };
    this.registroService.guardarClientes(0, cliente).subscribe(data => {
      this.idUsuario = data;
      sessionStorage.setItem('idusuario', this.idUsuario);
      this.router.navigate(['/CrearCuenta']);

    });


  }
}
