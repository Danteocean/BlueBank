import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-sesion',
  templateUrl: './nav-sesion.component.html',
  styleUrls: ['./nav-sesion.component.css']
})
export class NavSesionComponent implements OnInit {
  accion: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.accion =2;
    sessionStorage.setItem('accion', this.accion);
  }
  cerrarSesion() {
    sessionStorage.removeItem('nick');
    sessionStorage.clear();
    this.router.navigate(['/inicio']);
  }
}
