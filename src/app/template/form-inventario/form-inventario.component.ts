import { ProxyInventarioService } from 'src/app/service/inventario/proxy-inventario.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AddInventory } from 'src/app/models/inventory/add-inventory';
import { Router } from '@angular/router';
import { InventarioService } from 'src/app/service/inventario/inventario.service';

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
    private router:Router,
    private api: InventarioService) {}

  ngOnInit(): void {
    this.proxyInventarioService.currentInventory.subscribe(
      (inventarioForm) => (this.inventarioForm = inventarioForm)
    );
  }

  // TODO : Enviar el form a la base de datos
  editarInventario(form: AddInventory) {

    form.is_used = false;
    
    //Este es el de crear
    if(this.router.url === '/agregarInventario'){
      console.log(form);
      this.api.addInventory(form).subscribe(data => {
        console.log(data);
        this.router.navigate(['/inventario']);
      });
    }

    //Este es el de editar
    else{
      this.api.updateInventory(form).subscribe(data => {
        console.log(data);
        this.router.navigate(['/inventario']);
      });
    }
  }

}
