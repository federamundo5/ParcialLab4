import { Component, OnInit } from '@angular/core';
import {PaisesService} from '../../../servicios/paises-service.service'
import { FormControl, FormGroup} from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import {Actores} from '../../../clases/actores'
import {ActoresServiceService} from '../../../servicios/actores-service.service'


@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit {
  paises: any;
  paisesListado;;
  pais:any;
  paisstring:string;
  formulario;
  actores: Actores[];

  constructor(private paisesService:PaisesService, private formBuilder: FormBuilder, private actorService: ActoresServiceService) { }

  ngOnInit(): void {
    this.paisesListado = this.paisesService.obtenerPaises();
    localStorage.setItem('actores',JSON.stringify(this.actores));

    this.formulario = this.formBuilder.group({
      Nombre: new FormControl(''),
      tipo: new FormControl(''),
      Sexo: new FormControl(''),
      FechaNacimiento: new FormControl(''),
      Pais: new FormControl(''),
    });

  }

  enviarPais( event ){
    this.pais = event;
    this.paisstring = this.pais.name;
  
    console.log(this.pais);
  }
  onSubmit(data) {
    this.actorService.nuevoActor(this.formulario.value);
  }

}


