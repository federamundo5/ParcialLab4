import { Injectable } from '@angular/core';
import {Actores} from '../clases/actores'

@Injectable({
  providedIn: 'root'
})
export class ActoresServiceService {

  actores : Actores[]
  constructor( ) {

    localStorage.setItem('actores',JSON.stringify(this.actores));

  }

  nuevoActor(actor:Actores){
    this.actores.push(actor);
    localStorage.setItem('actores',JSON.stringify(this.actores));
  }

  obtenerActores(){
    return  JSON.parse(localStorage.getItem('actores'));
  }



}
