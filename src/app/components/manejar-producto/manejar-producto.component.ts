import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseTemplateListProductI } from 'src/app/models/responseTemplate.interface';
import { ProductoService } from 'src/app/service/producto/producto.service';
import { Product } from 'src/app/models/product/get-product';

@Component({
  selector: 'app-manejar-producto',
  templateUrl: './manejar-producto.component.html',
  styleUrls: ['./manejar-producto.component.scss']
})
export class ManejarProductoComponent {
  
  /**
   * @description This is the array of products
   * @version 1.0
   */
  products = new Array<Product>();

  /**
   * @description This method is used to initialize the component
   * @param api 
   * @param router
   * @version 1.0 
   */
  constructor( private api: ProductoService, private router: Router ) {}


  /**
   * @description This method is used to initialize the component, here we get all the products from the database
   * @version 1.0
   */
  ngOnInit(): void {
    this.getAllProducts();
  }

  /**
   * @description This method is used to get all the products from the database
   * @version 1.0
   */
  getAllProducts() {
    this.api.getAllProducts().subscribe((data) => {
      let dataResponse: ResponseTemplateListProductI = data;
      console.log(dataResponse);
      for (let index = 0; index < dataResponse.result.length; index++) {
        let product = new Product(
          dataResponse.result[index].nombre_producto,
          dataResponse.result[index].costo,
          dataResponse.result[index].codigo_barras,
        );
        this.products.push(product);
      }
    });
  }

  /**
   * @description Routes the admin to the AgregarProducto component
   * @version 1.0
   */
  agregarProducto() {
    this.router.navigate(['agregarProducto']);
  }

}
