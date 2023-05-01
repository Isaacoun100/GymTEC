import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { get_all_equipment } from 'src/app/examples';

@Component({
  selector: 'app-manejar-equipo',
  templateUrl: './manejar-equipo.component.html',
  styleUrls: ['./manejar-equipo.component.scss']
})
export class ManejarEquipoComponent {

  constructor( private router:Router){}

  equipos = get_all_equipment;

  agregarEquipo(){
    this.router.navigate(['agregarEquipo']);
  }

}
