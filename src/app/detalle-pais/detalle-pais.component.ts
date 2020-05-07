import { Component, OnInit ,Input,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styleUrls: ['./detalle-pais.component.css']
})
export class DetallePaisComponent implements OnInit {
  @Input() detallePais;
  @Output() eliminar = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


  borrarPais(){

    this.eliminar.emit( this.detallePais );
    this.detallePais=null; 
  
  }



  
}
