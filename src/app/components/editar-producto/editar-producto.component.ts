import { ProxyProductoService } from 'src/app/service/producto/proxy-producto.service';
import { AddProduct } from 'src/app/models/product/add-product';
import { ProductoService } from 'src/app/service/producto/producto.service';
import { ProductResponseTemplateI } from 'src/app/models/responseTemplate.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GetProduct } from 'src/app/models/product/get-product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { get_producto } from './../../examples';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.scss'],
})
export class EditarProductoComponent implements OnInit {

  productIdFromRoute: string | null;

  // Agregar los productos de la base de datos
  productoRequest : GetProduct | undefined;

  productoForm = new FormGroup({
    codigo_barras: new FormControl('', Validators.required),
    nombre_producto: new FormControl('', Validators.required),
    costo: new FormControl(0, Validators.required),
    descripcion: new FormControl('', Validators.required),
  });

  constructor(
    private proxyProductoService: ProxyProductoService,
    private route:ActivatedRoute,
    private router: Router,
    private api: ProductoService) {
      this.productIdFromRoute = this.route.snapshot.paramMap.get('productoNombre');
    }

  ngOnInit(): void {
    this.proxyProductoService.currentProduct.subscribe( (productoForm) => (this.productoForm = productoForm));
    this.productoForm.reset();
    this.updateProducto();
  }

  ngOnDestroy(){
    this.productoForm.reset();
  }

  
  updateProducto(){

    console.log(this.productIdFromRoute);

    const e: GetProduct = {codigo_barras: this.productIdFromRoute};

    this.api.getProduct(e).subscribe(data => {

      let dataResponse : ProductResponseTemplateI = data;

      console.log(dataResponse);

      this.productoForm.setValue(dataResponse.result);

    });
    
  }
  

  // Eliminar producto de la base de datos
  eliminarProducto() {
    const d: GetProduct = {codigo_barras: this.productIdFromRoute};
    this.api.deleteBranch(d).subscribe(data => {
      console.log(data);
      this.router.navigate(['/productos']);
    });
        
  }
  
}
