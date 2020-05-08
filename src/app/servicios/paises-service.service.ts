import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paises } from '../clases/paises'

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  paises:any[]=[];



    constructor( private httpClient:HttpClient) {

      this.httpClient.get('https://restcountries.eu/rest/v2/region/americas').subscribe( (data:any)=>{
        data.forEach(element => {
          this.paises.push(element)
        });
      });
     }

  obtenerPaises(){
    console.log(this.paises);
    return this.paises;
  }

  eliminarPais(pais){

    let eliminar;
    for (let index = 0; index < this.paises.length; index++) {
      if( pais.name == this.paises[index].name ){
        eliminar = index;
      }
    }
    this.paises.splice(eliminar,1);    

  }


  


}