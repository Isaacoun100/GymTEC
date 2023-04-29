import { branches } from 'src/app/examples';
import { AssociateTreatment } from 'src/app/models/treatment/associate-treatment';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AddService } from 'src/app/models/services/add-service';

@Component({
  selector: 'app-asociar-tratamiento',
  templateUrl: './asociar-tratamiento.component.html',
  styleUrls: ['./asociar-tratamiento.component.scss'],
})
export class AsociarTratamientoComponent {
  asociarTratamientoForm = new FormGroup({
    sucursal: new FormControl('', Validators.required),
    tratamiento: new FormControl('', Validators.required),
  });

  constructor(private route: ActivatedRoute) {}

  branches = branches;

  ngonInit(): void {}

  asignarTratamiento(form: any) {
    console.log(form);
  }

  cambiarNombreSucursal(e: any) {
    this.asociarTratamientoForm.controls['sucursal']?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

}
