import { AssociateProduct } from 'src/app/models/product/associate-product';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AddService } from 'src/app/models/services/add-service';

@Component({
  selector: 'app-asociar-producto',
  templateUrl: './asociar-producto.component.html',
  styleUrls: ['./asociar-producto.component.scss'],
})
export class AsociarProductoComponent {
  asociarProductoForm = new FormGroup({
    sucursal: new FormControl('', Validators.required),
    producto: new FormControl('', Validators.required),
  });

  constructor(private route: ActivatedRoute) {}

  ngonInit(): void {}
}
