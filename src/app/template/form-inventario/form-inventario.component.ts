import { ProxyInventarioService } from 'src/app/service/inventario/proxy-inventario.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AddInventory } from 'src/app/models/inventory/add-inventory';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-inventario',
  templateUrl: './form-inventario.component.html',
  styleUrls: ['./form-inventario.component.scss'],
})
export class FormInventarioComponent {

  // Las opciones son fixed
  options = [
    {value :'Cinta de correr'},
    {value :'Bicicleta estacionaria'},
    {value :'Multigimnasio'},
    {value :'Remo'},
    {value :'Pesa'}
  ];


  inventarioForm = new FormGroup({
    num_serie: new FormControl(0, Validators.required),
    marca: new FormControl('', Validators.required),
    costo: new FormControl(0, Validators.required),
    is_used: new FormControl(false, Validators.required),
    tipo_equipo: new FormControl('', Validators.required)
  });

  constructor(
    private proxyInventarioService: ProxyInventarioService,
    private router:Router) {}

  ngOnInit(): void {
    this.proxyInventarioService.currentInventory.subscribe(
      (inventarioForm) => (this.inventarioForm = inventarioForm)
    );
  }

  // TODO : Enviar el form a la base de datos
  editarInventario(form: AddInventory) {
    
    //Este es el de crear
    if(this.router.url === '/agregarProducto'){

    }

    //Este es el de editar
    else{

    }
  }

}
