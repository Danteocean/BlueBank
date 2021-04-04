import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CuentaCrear } from './clienteCuenta';
import { CrearCuentaService } from './crear-cuenta.service';
import { RegistroCuenta } from './RegistrarCliente';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.css']
})
export class CrearCuentaComponent implements OnInit {
  id!: any;
  cliente!: RegistroCuenta;
  nombre!: string;
  cuentacliente!: FormGroup;
  cuentaCrear!: CuentaCrear;
  accion: any;
  constructor(private CrearCuentaService: CrearCuentaService, private fb: FormBuilder,
    private router: Router) {
    this.cuentacliente = this.fb.group({
      nombre: ['',],
      monto: ['', Validators.required],

    });
  }

  ngOnInit(): void {
    this.id = sessionStorage.getItem('idusuario');
    this.accion = sessionStorage.getItem('accion');
    if (this.id != null || this.id == 0) {
      this.obternerclient();


    } else {
      this.router.navigate(['/inicio']);
    }

  }

  obternerclient() {
    this.id = sessionStorage.getItem('idusuario');
    this.CrearCuentaService.consultaCliente(this.id).subscribe(data => {
      this.cliente = data;
      this.nombre = this.cliente.nombres + " " + this.cliente.apellidos;
      console.log(this.nombre);
    });

  }

  guardarmonto() {
    const cuentaCrear: CuentaCrear = {
      monto: this.cuentacliente.get('monto')?.value,
      IdClientes: this.id,
    };

    this.CrearCuentaService.guardarcuenta(0, cuentaCrear).subscribe(data => {
      if (this.accion == 2) {
        this.router.navigate(['/Cliente']);
      } else {
        this.router.navigate(['/inicio']);
      }

    });
  }

}
