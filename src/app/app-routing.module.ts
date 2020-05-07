import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { PaisesListadoComponent } from './componentes/paises/paises-listado/paises-listado.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { PeliculaListadoComponent } from './componentes/peliculas/pelicula-listado/pelicula-listado.component';
import { AltaComponent } from './componentes/peliculas/alta/alta.component';
import { ActorListadoComponent } from './componentes/actor/actor-listado/actor-listado.component';
import { ActorAltaComponent } from './componentes/actor/actor-alta/actor-alta.component';


const routes: Routes = [
  {path: '' , component: BienvenidoComponent},
  {path: 'Bienvenido' , component: BienvenidoComponent},
  {path: 'Paises' , component: PaisesListadoComponent},
  {path: 'Busqueda' , component: BusquedaComponent},
  {path: 'Peliculas/alta' , component: AltaComponent},
  {path: 'Actor/Listado' , component: ActorListadoComponent},
  {path: 'Actor/Alta' , component: ActorAltaComponent},
  {path: 'Paises/Listado' , component: PaisesListadoComponent},
  {path: 'Peliculas/listado' , component: PeliculaListadoComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
