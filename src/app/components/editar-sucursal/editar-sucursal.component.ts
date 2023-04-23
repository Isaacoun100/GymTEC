import { AddBranch } from './../../models/branch/add-branch';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { get_branch } from 'src/app/examples';

@Component({
  selector: 'app-editar-sucursal',
  templateUrl: './editar-sucursal.component.html',
  styleUrls: ['./editar-sucursal.component.scss']
})
export class EditarSucursalComponent {

  get_branch = get_branch;

  constructor(){}

  sucursalForm = new FormControl({

    nombre_sucursal:  ['', Validators.required],
    fecha_apertura: ['', Validators.required],
    horario: ['2000-01-01', Validators.required],
    cap_max: [0, Validators.required],
    provincia: ['', Validators.required],
    canton: ['', Validators.required],
    distrito: ['', Validators.required],
    manager: ['', Validators.required],
    telefono: [[]],
    active_spa: [false],
    active_store: [false],

  });

  editarSucursal(form:AddBranch){}

}
