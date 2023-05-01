import { get_all_products } from './../../examples';
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
  
    // Agregar los productos de la base de datos
    products = new Array<Product>();

  constructor( private api: ProductoService, private router: Router ) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.api.getAllProducts().subscribe((data) => {
      let dataResponse: ResponseTemplateListProductI = data;
      console.log(dataResponse);
      for (let index = 0; index < dataResponse.result.length; index++) {
        let product = new Product(
          dataResponse.result[index].nombre_producto,
          dataResponse.result[index].costo,
        );
        this.products.push(product);
      }
    });
  }
  agregarProducto() {
    this.router.navigate(['agregarProducto']);
  }

}
