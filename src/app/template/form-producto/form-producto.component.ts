import { ProxyProductoService } from 'src/app/service/producto/proxy-producto.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddProduct } from 'src/app/models/product/add-product';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/service/producto/producto.service';

@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.scss'],
})
export class FormProductoComponent {

  productoForm = new FormGroup({
    codigo_barras: new FormControl('', Validators.required),
    nombre_producto: new FormControl('', Validators.required),
    costo: new FormControl(0, Validators.required),
    descripcion: new FormControl('', Validators.required),
  });

  /**
   * @description Constructor of the class.
   * @param proxyProductoService
   * @param router
   * @param api
   * @version 1.0
   */
  constructor(
    private proxyProductoService: ProxyProductoService,
    private router: Router,
    private api: ProductoService) {}

  /**
   * @description Calls the variable currentProduct from proxyProductoService and stores productoForm.
   * @version 1.0
   */
  ngOnInit(): void {
    this.proxyProductoService.currentProduct.subscribe(
      (productoForm) => (this.productoForm = productoForm)
    );
  }

  /**
   * @description This method is used to add a new product or update an existing one.
   * @param form 
   * @version 1.0
   */
  editarProducto(form: AddProduct) {
    
    //Este es el de crear
    if(this.router.url === '/agregarProducto'){
      console.log(form);
      this.api.addProduct(form).subscribe(data => {
        console.log(data);
        this.router.navigate(['/productos']);
      });
    }
    //Este es el de editar
    else{
      this.api.updateProduct(form).subscribe(data => {
        console.log(data);
        this.router.navigate(['/productos']);
      });

    }

  }

}
