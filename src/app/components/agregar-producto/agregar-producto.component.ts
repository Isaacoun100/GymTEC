import { ProxyProductoService } from 'src/app/service/producto/proxy-producto.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.scss'],
})
export class AgregarProductoComponent {
  productoForm = new FormGroup({
    codigo_barras: new FormControl('WHO WAS IN PARIS?', Validators.required),
    nombre_producto: new FormControl('', Validators.required),
    costo: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
  });

  constructor(private proxyProductoService: ProxyProductoService) {}

  ngOnInit(): void {
    this.proxyProductoService.currentMessage.subscribe(
      (productoForm) => (this.productoForm = productoForm)
    );
  }
}
