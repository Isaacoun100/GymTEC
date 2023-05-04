import { AssignResponseTemplateI, ResponseTemplateListBranchesI, ResponseTemplateListServiceI } from 'src/app/models/responseTemplate.interface';
import { ServicioService } from 'src/app/service/servicio/servicio.service';
import { SucursalService } from './../../service/sucursal/sucursal.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { services } from 'src/app/examples';
import { Branch } from 'src/app/models/branch/get-branch';
import { Service } from 'src/app/models/services/add-service';

@Component({
  selector: 'app-asignar-servicio',
  templateUrl: './asignar-servicio.component.html',
  styleUrls: ['./asignar-servicio.component.scss']
})
export class AsignarServicioComponent implements OnInit {


  // TODO : Get the branches from the API
  branches = new Array<Branch>();

  // TODO : Get the services from the API
  services = new Array<Service>;

  asignarServicioForm = new FormGroup({
    sucursal: new FormControl(null, Validators.required),
    servicio: new FormControl(null, Validators.required)
    });

  constructor( 
    private sucursalService: SucursalService,
    private servicioService: ServicioService ){
    this.updateBranches();
    this.updateService();
  }

  updateBranches(){
    this.sucursalService.getAllBranches().subscribe((data) => {
      let dataResponse: ResponseTemplateListBranchesI = data;
      console.log('Lista sucurales: ', dataResponse);
      this.branches = dataResponse.result;
    });
  }

  updateService(){
    this.servicioService.getAllServices().subscribe((data) => {
      let dataResponse: ResponseTemplateListServiceI = data;
      this.services = dataResponse.result;
    });
  }

  ngOnInit(): void {}

  // TODO : Enviar el formulario a la base de datos
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
