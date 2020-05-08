import { Injectable } from '@angular/core';
import {Actores} from '../clases/actores'

@Injectable({
  providedIn: 'root'
})
export class ActoresServiceService {

  actores : Actores[]
  constructor( ) {

this.actores=[
  new Actores(1,"carlos","pepe","M","22/05/1996","https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg","colombia"),
]
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
