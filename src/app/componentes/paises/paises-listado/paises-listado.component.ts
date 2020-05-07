import { Component, OnInit } from '@angular/core';

import {PaisesService} from '../../../servicios/paises-service.service'
import { MiservicioService } from 'src/app/servicios/mi-service.service';


@Component({
  selector: 'app-paises-listado',
  templateUrl: './paises-listado.component.html',
  styleUrls: ['./paises-listado.component.css']
})
export class PaisesListadoComponent implements OnInit {

  paises: any;
  paisesListado;;
  pais:any;
  constructor( private paisesService:PaisesService ) { }

  ngOnInit(): void {
    this.paisesService.obtenerPaises().subscribe( resp=>{
      console.log(resp);
      this.paisesListado = resp;
      console.log(this.paisesListado);
    })

  }

  enviarPais( event ){
    this.pais = event;
    console.log(this.pais);
  }

  

}
