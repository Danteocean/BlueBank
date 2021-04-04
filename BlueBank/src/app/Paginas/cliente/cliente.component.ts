import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  id: any;
  listaCuentas!: Cliente[];
  idCuenta: any;
  constructor(private clienteService: ClienteService, private router: Router) { }

  ngOnInit(): void {
    this.id = sessionStorage.getItem('idusuario');
    if (this.id == null || this.id == 0) {
      this.router.navigate(['/inicio']);
    } else {
      this.cargardatos();
    }

  }
  cargardatos() {
    this.id = sessionStorage.getItem('idusuario');
    this.clienteService.obtenerCuentas(this.id).subscribe(data => {
      this.listaCuentas = data;

    });
  }
}
