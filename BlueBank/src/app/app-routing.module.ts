import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './Paginas/cliente/cliente.component';
import { ConsignarComponent } from './Paginas/consignar/consignar.component';
import { CrearCuentaComponent } from './Paginas/crear-cuenta/crear-cuenta.component';
import { InicioComponent } from './Paginas/inicio/inicio.component';
import { LoginComponent } from './Paginas/login/login.component';
import { RegistrarComponent } from './Paginas/registrar/registrar.component';
import { RetirarComponent } from './Paginas/retirar/retirar.component';

const routes: Routes = [{ path: '##', redirectTo: '/' },
{path:'',component:InicioComponent},
{path:'inicio',component:InicioComponent},
{path:'login',component:LoginComponent},
{path:'registro',component:RegistrarComponent},
{path:'Cliente',component:ClienteComponent},
{path:'CrearCuenta',component:CrearCuentaComponent},
{path:'Consignar/:id',component:ConsignarComponent},
{path:'Retirar/:id',component:RetirarComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
