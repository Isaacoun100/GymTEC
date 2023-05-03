import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Branch } from 'src/app/models/branch/get-branch';
import { SucursalService } from 'src/app/service/sucursal/sucursal.service';
import { AssignTreatmentResponseTemplateI, ResponseTemplateListBranchesI } from 'src/app/models/responseTemplate.interface';
import { TratamientoService } from 'src/app/service/tratamiento/tratamiento.service';

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
    tratamiento_id: new FormControl('', Validators.required),
  });

  constructor(
    private route: ActivatedRoute,
    private sucursalesService : SucursalService,
    private tratamientoService: TratamientoService) {
      this.updateBranches();
    }


  ngonInit(): void {}


  asignarTratamiento(form: any) {
    console.log('Formulario: ', form);

    this.tratamientoService.associateTreatment(form).subscribe((data) => {
      let dataResponse: AssignTreatmentResponseTemplateI = data;

      if (dataResponse.status == 'ok') {
        console.log('Tratamiento asociado correctamente');
        alert('Tratamiento asociado correctamente');
      } else {
        console.log('Error al asociar el tratamiento');
        alert('Error al asociar el tratamiento');
      }

    });
    
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
