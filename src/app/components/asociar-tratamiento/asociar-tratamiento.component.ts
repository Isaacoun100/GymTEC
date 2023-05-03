import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Branch } from 'src/app/models/branch/get-branch';
import { SucursalService } from 'src/app/service/sucursal/sucursal.service';
import { ResponseTemplateListBranchesI } from 'src/app/models/responseTemplate.interface';

@Component({
  selector: 'app-asociar-tratamiento',
  templateUrl: './asociar-tratamiento.component.html',
  styleUrls: ['./asociar-tratamiento.component.scss'],
})
export class AsociarTratamientoComponent {

  // Agregar las sucursales de la base de datos
  branches = new Array<Branch>;
  
  asociarTratamientoForm = new FormGroup({
    sucursal: new FormControl('', Validators.required),
    tratamiento: new FormControl('', Validators.required),
  });

  constructor(
    private route: ActivatedRoute,
    private sucursalesService : SucursalService) {
      this.updateBranches();
    }


  ngonInit(): void {}


  asignarTratamiento(form: any) {
    
  }

  updateBranches(){
    this.sucursalesService.getAllBranches().subscribe((data) => {
      let dataResponse: ResponseTemplateListBranchesI = data;
      console.log('Lista sucurales: ', dataResponse);
      this.branches = dataResponse.result;
    });
  }

  cambiarNombreSucursal(e: any) {
    this.asociarTratamientoForm.controls['sucursal']?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

}
