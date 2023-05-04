import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ProxyInventarioService } from 'src/app/service/inventario/proxy-inventario.service';
@Component({
  selector: 'app-agregar-inventario',
  templateUrl: './agregar-inventario.component.html',
  styleUrls: ['./agregar-inventario.component.scss'],
})
export class AgregarInventarioComponent {

  /**
   * This is the form used to capture the user input
   * @type {FormGroup}
   */
  inventarioForm = new FormGroup({
    num_serie: new FormControl('', Validators.required),
    marca: new FormControl('', Validators.required),
    costo: new FormControl('', Validators.required),
    is_used: new FormControl(false, Validators.required),
    tipo_equipo: new FormControl('', Validators.required),
    nombre_sucursal: new FormControl('', Validators.required),
  });

  /**
   * @description It creates an instance of AgregarInventarioComponent
   * @version 1.0
   */
  constructor(private proxyInventarioService: ProxyInventarioService) {}

  /**
   * @description This method is executed when the view is initialized, it subscribes the form to the service.
   * @version 1.0
   */
  ngOnInit(): void {
    this.proxyInventarioService.currentInventory.subscribe(
      (inventarioForm) => (this.inventarioForm = inventarioForm));
      this.inventarioForm.reset();
  }

  /**
   * @description This method resets the form when the view is destroyed
   * @version 1.0
   */
  ngOnDestroy(){
    this.inventarioForm.reset();
  }

}
