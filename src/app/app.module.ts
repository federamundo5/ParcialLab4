import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { AltaComponent } from './componentes/peliculas/alta/alta.component';
import { ActorAltaComponent } from './componentes/actor/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './componentes/actor/actor-listado/actor-listado.component';
import { PeliculaListadoComponent } from './componentes/peliculas/pelicula-listado/pelicula-listado.component';
import { PaisesListadoComponent } from './componentes/paises/paises-listado/paises-listado.component';
import { Http } from '@angular/http';
import { PaisesService } from './servicios/paises-service.service';
import { MiHttpService } from './servicios/mihttp.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { DetallePaisComponent } from './detalle-pais/detalle-pais.component';
import { TablaPaisesComponent } from './componentes/paises/tabla-paises/tabla-paises.component'; 

@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    MenuComponent,
    BusquedaComponent,
    AltaComponent,
    ActorAltaComponent,
    ActorListadoComponent,
    PeliculaListadoComponent,
    PaisesListadoComponent,
    DetallePaisComponent,
    TablaPaisesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [Http,PaisesService,MiHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
