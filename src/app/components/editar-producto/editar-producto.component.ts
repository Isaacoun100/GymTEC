import { ProxyProductoService } from 'src/app/service/producto/proxy-producto.service';
import { AddProduct } from 'src/app/models/product/add-product';
import { ProductoService } from 'src/app/service/producto/producto.service';
import { ProductResponseTemplateI } from 'src/app/models/responseTemplate.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GetProduct } from 'src/app/models/product/get-product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  /**
   * @description This is the form used to capture the user input
   * @version 1.0
   */
  productoForm = new FormGroup({
    codigo_barras: new FormControl('', Validators.required),
    nombre_producto: new FormControl('', Validators.required),
    costo: new FormControl(0, Validators.required),
    descripcion: new FormControl('', Validators.required),
  });

  /**
   * @description Here we assign the value of the route to the variable productIdFromRoute
   * @param proxyProductoService 
   * @param route 
   * @param router 
   * @param api 
   */
  constructor(
    private proxyProductoService: ProxyProductoService,
    private route:ActivatedRoute,
    private router: Router,
    private api: ProductoService) {
      this.productIdFromRoute = this.route.snapshot.paramMap.get('productoNombre');
    }
  
  /**
   * @description This method runs when the component is created and it is used to update the product
   * @version 1.0
   */
  ngOnInit(): void {
    this.proxyProductoService.currentProduct.subscribe( (productoForm) => (this.productoForm = productoForm));
    this.productoForm.reset();
    this.updateProducto();
  }

  /**
   * @description This method is used to reset the form once the component is destroyed
   */
  ngOnDestroy(){
    this.productoForm.reset();
  }

  
  /**
   * @description This method is used to update the product
   * @version 1.0
   */
  updateProducto(){

    console.log(this.productIdFromRoute);

    const e: GetProduct = {codigo_barras: this.productIdFromRoute};

    this.api.getProduct(e).subscribe(data => {
      let dataResponse : ProductResponseTemplateI= data;
      this.productoForm.setValue(dataResponse.result);

    });
    
  }
  

  /**
   * @description THis method is used to delete the product
   * @version 1.0
   */
  eliminarProducto() {
    const e: GetProduct = {codigo_barras: this.productIdFromRoute};
    this.api.deleteBranch(e).subscribe(data => {
      console.log(data);
      this.router.navigate(['/productos']);
    });
        
  }
  
}
