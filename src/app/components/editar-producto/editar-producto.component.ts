import { get_producto } from './../../examples';
import { ProxyProductoService } from 'src/app/service/producto/proxy-producto.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.scss'],
})
export class EditarProductoComponent implements OnInit {

  productIdFromRoute: string | null | undefined ;

  get_producto = get_producto;

  productoForm = new FormGroup({
    codigo_barras: new FormControl('', Validators.required),
    nombre_producto: new FormControl('', Validators.required),
    costo: new FormControl(0, Validators.required),
    descripcion: new FormControl('', Validators.required),
  });

  constructor(
    private proxyProductoService: ProxyProductoService,
    private route:ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.proxyProductoService.currentProduct.subscribe(
      (productoForm) => (this.productoForm = productoForm));
      this.productoForm.reset();
      this.updateProducto();
  }

  ngOnDestroy(){
    this.productoForm.reset();
  }

  
  updateProducto(){
    
    this.productoForm.controls['codigo_barras'].setValue(get_producto.result.codigo_barras);
    this.productoForm.controls['nombre_producto'].setValue(get_producto.result.nombre_producto);
    this.productoForm.controls['costo'].setValue(get_producto.result.costo);
    this.productoForm.controls['descripcion'].setValue(get_producto.result.descripcion);
    
  }
  
  eliminarProducto() {
    // Add the form to the API using the proper service
    this.productIdFromRoute = this.route.snapshot.paramMap.get('productoNombre');
    console.log(this.productIdFromRoute);
  }
  
}
