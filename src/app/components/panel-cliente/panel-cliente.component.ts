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

  branches = new Array<Branch>();

  classes = new Array<Clase>();

  buscarForm = new FormGroup({
    fecha : new FormControl('', Validators.required),
    sucursal : new FormControl('', Validators.required)
  });

  constructor(
    private sucursalService : SucursalService,
    private api : ClaseService) { 
    this.updateBranches();
  }

  updateBranches(){
    this.sucursalService.getAllBranches().subscribe((data) => {
      let dataResponse: ResponseTemplateListBranchesI = data;
      console.log('Lista sucurales: ', dataResponse);
      this.branches = dataResponse.result;
    });
  }

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
