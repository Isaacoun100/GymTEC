import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Branch } from 'src/app/models/branch/get-branch';
import { Clase, RequestClassI } from 'src/app/models/class/clase';
import { EnrollClass } from 'src/app/models/class/enroll-class';
import { ResponseTemplateI, ResponseTemplateListBranchesI, ResponseTemplateListClassI } from 'src/app/models/responseTemplate.interface';
import { ClaseService } from 'src/app/service/clase/clase.service';
import { SucursalService } from 'src/app/service/sucursal/sucursal.service';

@Component({
  selector: 'app-panel-cliente',
  templateUrl: './panel-cliente.component.html',
  styleUrls: ['./panel-cliente.component.scss']
})
export class PanelClienteComponent {

  /**
   * @description This is the array of branches
   * @version 1.0
   */
  branches = new Array<Branch>();

  /**
   * @description This is the array of classes
   * @version 1.0
   */
  classes = new Array<Clase>();

  /**
   * @description This is the form used to get the user input
   * @version 1.0
   */
  buscarForm = new FormGroup({
    fecha : new FormControl('', Validators.required),
    sucursal : new FormControl('', Validators.required)
  });

  /**
   * @description This method is used to initialize the component and update the branches
   * @param sucursalService 
   * @param api
   * @version 1.0 
   */
  constructor(
    private sucursalService : SucursalService,
    private api : ClaseService) { 
    this.updateBranches();
  }

  /**
   * @description This method is used to update the branches
   * @version 1.0
   */
  updateBranches(){
    this.sucursalService.getAllBranches().subscribe((data) => {
      let dataResponse: ResponseTemplateListBranchesI = data;
      console.log('Lista sucurales: ', dataResponse);
      this.branches = dataResponse.result;
    });
  }

  /**
   * @description This method is used get all of the classes available for the selected branch and date
   * @param form 
   */
  solicitarCitas( form : RequestClassI ){
    
    this.api.solicitarCitas(form).subscribe((data) => {
      let dataResponse: ResponseTemplateListClassI = data;

      if(dataResponse.result.length > 0){
        this.classes = dataResponse.result;
        console.log(this.classes);
      }
      else
        alert('No hay citas disponibles para esta sucursal ese día');

    });

  }

  /**
   * @description This method is used to enroll the user in a class
   * @param claseID 
   */
  matricularCita( claseID : number ){

    const e = JSON.parse( sessionStorage.getItem('client')! )['cedula_cliente'];

    console.log( e );   
    const enroll : EnrollClass = {
      cedula_cliente : e ,
      clase_id : claseID
    }

    console.log(enroll);

    this.api.enrollClass(enroll).subscribe((data) => {
      let dataResponse: ResponseTemplateI = data;

      if(dataResponse.status == 'ok')
        alert('Se ha matriculado a la clase correctamente');
        else
          alert('No se ha podido matricular a la clase');
    });
    
  }

}
