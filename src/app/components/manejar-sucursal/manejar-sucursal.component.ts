import { Component } from '@angular/core';
import { branches } from 'src/app/examples';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manejar-sucursal',
  templateUrl: './manejar-sucursal.component.html',
  styleUrls: ['./manejar-sucursal.component.scss']
})
export class ManejarSucursalComponent {

  constructor(private router:Router){}
  
  branches = branches;
  
  agregarSucursal(){
    this.router.navigate(['agregarSucursal']);
   }

}
