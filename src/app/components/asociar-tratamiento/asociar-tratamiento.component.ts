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

  /**
   * @description This is the list of the branches to show the user in the dropdown
   * @version 1.0
   */
  branches = new Array<Branch>;
  
  /**
   * @description This is the form used to capture the user input
   * @version 1.0
   */
  asociarTratamientoForm = new FormGroup({
    sucursal: new FormControl('', Validators.required),
    tratamiento_id: new FormControl('', Validators.required),
  });

  /**
   * @description This is the constructor of the component where we update the branches and inventories
   * @param route 
   * @param sucursalesService 
   * @param tratamientoService 
   */
  constructor(
    private route: ActivatedRoute,
    private sucursalesService : SucursalService,
    private tratamientoService: TratamientoService) {
      this.updateBranches();
    }

  /**
   * @description This method is used to associate the treatment to a branch
   * @param form 
   */
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

  /**
   * @description This method is used to update the list of branches
   * @version 1.0
   */
  updateBranches(){
    this.sucursalesService.getAllBranches().subscribe((data) => {
      let dataResponse: ResponseTemplateListBranchesI = data;
      console.log('Lista sucurales: ', dataResponse);
      this.branches = dataResponse.result;
    });
  }

  /**
   * @description Changes the value of the list that is selected
   * @version 1.0
   * @param e 
   */
  cambiarNombreSucursal(e: any) {
    this.asociarTratamientoForm.controls['sucursal']?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

}
