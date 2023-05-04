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

  constructor( private api : SucursalService) {
    this.updateBranches();
  }

  copyForm = new FormGroup({
    branch_to_copy: new FormControl('', Validators.required),
    new_branch: new FormControl('', Validators.required)
  });

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

updateBranches(){
  this.api.getAllBranches().subscribe((data) => {
    let dataResponse: ResponseTemplateListBranchesI = data;

    this.branches = dataResponse.result;

  });
}

  /**
   * This method is used to change the value of the branch name
   * @param e 
   */
  cambiarSucursal(e: any) {
    this.copyForm.controls['branch_to_copy']?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

}