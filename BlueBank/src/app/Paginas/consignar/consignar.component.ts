import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CuentaConsignar } from './clienteCuenta';
import { ConsignacionService } from './consignacion.service';

@Component({
  selector: 'app-consignar',
  templateUrl: './consignar.component.html',
  styleUrls: ['./consignar.component.css']
})
export class ConsignarComponent implements OnInit {
  Id: any;
  consignar!: FormGroup;
  consignacion!: CuentaConsignar;
  IdCuenta: any;
  constructor(private route: ActivatedRoute, private fb: FormBuilder, private router: Router,
    private ConsignacionService: ConsignacionService) {
    this.consignar = this.fb.group({
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




  guardarConsignacion() {
    const consignacion: CuentaConsignar = {
      Id: this.IdCuenta,
      monto: this.consignar.get('monto')?.value,
      IdClientes: this.Id
    };
    this.ConsignacionService.guardarConsignacion(1, consignacion).subscribe(data => {
      this.router.navigate(['/Cliente']);
    });
  }


}
