import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CuentaRetirar } from './clienteCuenta';
import { RetirarService } from './retirar.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-retirar',
  templateUrl: './retirar.component.html',
  styleUrls: ['./retirar.component.css']
})
export class RetirarComponent implements OnInit {
  Id: any;
  IdCuenta: any;
  retirar!: FormGroup;
  CrearRetirar!: CuentaRetirar;
  mensaje: any;
  cerrarAlerta = false;
  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder,
    private RetirarService: RetirarService) {
    this.retirar = this.fb.group({
      Id: ['',],
      monto: ['', Validators.required],

    });

  }

  ngOnInit(): void {
    this.Id = sessionStorage.getItem('idusuario');
    if (this.Id == null || this.Id == 0) {
      this.router.navigate(['/login']);
    } else {
      this.IdCuenta = this.route.snapshot.paramMap.get('id');
    }

  }
  guardarRetiro() {
    const CrearRetirar: CuentaRetirar = {
      Id: this.IdCuenta,
      monto: this.retirar.get('monto')?.value,
      IdClientes: this.Id
    };
    this.RetirarService.guardarRetiro(2, CrearRetirar).subscribe(data => {
      this.router.navigate(['/Cliente']);
    }, err => {
      if (err.status == 400) {
        console.log(err.error + ' error todo');
        this.mensaje = err.error;
        this.cerrarAlerta = true;
      }
    });
  }
}
