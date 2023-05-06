import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Service} from 'src/app/models/services/add-service';
import { ServicioService } from 'src/app/service/servicio/servicio.service';

@Component({
  selector: 'app-agregar-servicio',
  templateUrl: './agregar-servicio.component.html',
  styleUrls: ['./agregar-servicio.component.scss']
})
export class AgregarServicioComponent{

  /**
   * @description This is the form used to capture the user input
   * @version 1.0
   */
  agregarServicioForm = new FormGroup({
    descripcion: new FormControl('', Validators.required)
    });

  /**
   * @param route 
   * @param api 
   */  
  constructor( 
    private route: ActivatedRoute,
    private api: ServicioService) { }

  /** 
   * @description It subscribes the form to the service
   * @param form 
   * @version 1.0
   */
  agregarServicio(form:any){

    const response : Service = { 'servicio' : form.descripcion };

    this.api.addService(response).subscribe(data => {
      console.log(data);
      if(data.status == 'ok'){
        alert("Servicio agregado con éxito");
      }
      else{
        alert("No se pudo agregar el servicio");
      }
    });
    
  }

}
