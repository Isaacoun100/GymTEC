import { AssignResponseTemplateI, ResponseTemplateListBranchesI, ResponseTemplateListServiceI } from 'src/app/models/responseTemplate.interface';
import { ServicioService } from 'src/app/service/servicio/servicio.service';
import { SucursalService } from './../../service/sucursal/sucursal.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Service } from 'src/app/models/services/add-service';
import { Branch } from 'src/app/models/branch/get-branch';
import { Component } from '@angular/core';

@Component({
  selector: 'app-asignar-servicio',
  templateUrl: './asignar-servicio.component.html',
  styleUrls: ['./asignar-servicio.component.scss']
})
export class AsignarServicioComponent{


  /**
   * @description List of the branches to show the user in the dropdown
   * @version 1.0
   */
  branches = new Array<Branch>();

  /**
   * @description List of the services to show the user in the dropdown
   * @version 1.0
   */
  services = new Array<Service>;

  /**
   * @description This is the form used to capture the user input
   * @version 1.0
   */
  asignarServicioForm = new FormGroup({
    sucursal: new FormControl(null, Validators.required),
    servicio: new FormControl(null, Validators.required)
    });

    /**
     * @description This is the constructor of the component where we update the branches and services
     * @param sucursalService 
     * @param servicioService 
     */
  constructor( 
    private sucursalService: SucursalService,
    private servicioService: ServicioService ){
    this.updateBranches();
    this.updateService();
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
   * @description This method is used to update the services
   * @version 1.0
   */
  updateService(){
    this.servicioService.getAllServices().subscribe((data) => {
      let dataResponse: ResponseTemplateListServiceI = data;
      this.services = dataResponse.result;
    });
  }

  /**
   * @description This method is used to assign a service to a branch
   * @param form 
   * @version 1.0
   */
  asignarServicio(form:any){

    console.log('Formulario: ', form);

    this.servicioService.assignService(form).subscribe((data) => {
      let dataResponse: AssignResponseTemplateI = data;

      if (dataResponse.status == 'ok'){
        console.log('Servicio asignado correctamente');
        alert('Servicio asignado correctamente');
      }
      else{
        console.log('Error al asignar el servicio');
        alert('Error al asignar el servicio');
      }

    });

  }

  /**
   * This method is used to change the value of the branch name
   * @param e 
   */
  cambiarNombreSucursal(e: any) {
    this.asignarServicioForm.controls['sucursal']?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  /**
   * This method is used to change the value of the service name
   * @param e 
   */
  cambiarServicio(e: any) {
    this.asignarServicioForm.controls['servicio']?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

}
