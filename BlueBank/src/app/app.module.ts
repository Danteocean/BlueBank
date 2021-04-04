import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './Paginas/nav/nav.component';
import { LoginComponent } from './Paginas/login/login.component';
import { RegistrarComponent } from './Paginas/registrar/registrar.component';
import { InicioComponent } from './Paginas/inicio/inicio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavSesionComponent } from './Paginas/nav-sesion/nav-sesion.component';
import { ClienteComponent } from './Paginas/cliente/cliente.component';
import { CrearCuentaComponent } from './Paginas/crear-cuenta/crear-cuenta.component';
import { ConsignarComponent } from './Paginas/consignar/consignar.component';
import { RetirarComponent } from './Paginas/retirar/retirar.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    RegistrarComponent,
    InicioComponent,
    NavSesionComponent,
    ClienteComponent,
    CrearCuentaComponent,
    ConsignarComponent,
    RetirarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
