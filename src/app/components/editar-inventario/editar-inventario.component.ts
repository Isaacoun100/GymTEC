import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { get_inventory } from 'src/app/examples';
import { ProxyInventarioService } from 'src/app/service/inventario/proxy-inventario.service';

@Component({
  selector: 'app-editar-inventario',
  templateUrl: './editar-inventario.component.html',
  styleUrls: ['./editar-inventario.component.scss'],
})
export class EditarInventarioComponent {

  productIdFromRoute: string | null | undefined ;

  get_inventory = get_inventory;

  inventarioForm = new FormGroup({
    num_serie: new FormControl(0, Validators.required),
    marca: new FormControl('', Validators.required),
    costo: new FormControl(0, Validators.required),
    is_used: new FormControl(false, Validators.required),
    tipo_equipo: new FormControl('', Validators.required)
  });

  constructor(
    private proxyInventarioService: ProxyInventarioService,
    private route:ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.proxyInventarioService.currentInventory.subscribe(
      (inventarioForm) => (this.inventarioForm = inventarioForm));
      this.inventarioForm.reset();
      this.updateInventario();
  }

  eliminarInventario(){
    // Get route parameter
    this.productIdFromRoute = this.route.snapshot.paramMap.get('sucursalNombre');
    console.log(this.inventarioForm);
  }

  ngOnDestroy(){
    this.inventarioForm.reset();
  }

  updateInventario(){
    
    this.inventarioForm.controls['num_serie'].setValue(get_inventory.num_serie);
    this.inventarioForm.controls['marca'].setValue(get_inventory.marca);
    this.inventarioForm.controls['costo'].setValue(get_inventory.costo);
    this.inventarioForm.controls['is_used'].setValue(get_inventory.is_used);
    this.inventarioForm.controls['tipo_equipo'].setValue(get_inventory.tipo_equipo);
  }

}
