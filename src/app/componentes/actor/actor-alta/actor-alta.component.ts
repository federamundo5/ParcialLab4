import { Component, OnInit } from '@angular/core';
import {PaisesService} from '../../../servicios/paises-service.service'

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit {
  paises: any;
  paisesListado;;
  pais:any;
  constructor(private paisesService:PaisesService) { }

  ngOnInit(): void {

  }

}
