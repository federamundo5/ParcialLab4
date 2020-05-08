import { Component, OnInit } from '@angular/core';
import {ActoresServiceService} from '../../../servicios/actores-service.service'


@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.css']
})
export class ActorListadoComponent implements OnInit {

  actores: any;
  constructor(private actorService: ActoresServiceService) { }

  ngOnInit(): void {
    this.actores =  this.actorService.obtenerActores();
  }

}
