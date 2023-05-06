import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Branch } from 'src/app/models/branch/get-branch';
import { ResponseTemplateListBranchesI } from 'src/app/models/responseTemplate.interface';
import { SucursalService } from 'src/app/service/sucursal/sucursal.service';

@Component({
  selector: 'app-copy-sucursal',
  templateUrl: './copy-sucursal.component.html',
  styleUrls: ['./copy-sucursal.component.scss']
})
export class CopySucursalComponent {

  branches = new Array<Branch>

  /**
   * @description ICreates an instance of CopySucursalComponent
   * @version 1.0
   */
  constructor( private api : SucursalService) {
    this.updateBranches();
  }

  /**
   * @description This method is used to validate the form
   * @version 1.0
   */
  copyForm = new FormGroup({
    branch_to_copy: new FormControl('', Validators.required),
    new_branch: new FormControl('', Validators.required)
  });

  /**
   * @description This method is used to copy the branch
   * @version 1.0
   */
  newSucursal(form:any){

    console.log(form);

    this.api.copySucursal(form).subscribe(data => {
      let dataResponse: any = data;

      if(dataResponse.status == 'ok')
        alert('Sucursal copiada correctamente');
      else
        alert('Error al copiar sucursal');

  });
}

/**
 * @description This method is used to update the branches
 * @version 1.0
 */
updateBranches(){
  this.api.getAllBranches().subscribe((data) => {
    let dataResponse: ResponseTemplateListBranchesI = data;

    this.branches = dataResponse.result;

  });
}

  /**
   * @description This method is used to change the value of the branch to copy
   * @version 1.0
   */
  cambiarSucursal(e: any) {
    this.copyForm.controls['branch_to_copy']?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

}