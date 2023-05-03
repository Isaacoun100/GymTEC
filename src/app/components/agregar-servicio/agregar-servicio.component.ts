 import { AddService as sendService } from 'src/app/service/servicio/servicio.service';
import { branches, services } from 'src/app/examples';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Service} from 'src/app/models/services/add-service';
import { ServicioService } from 'src/app/service/servicio/servicio.service';

@Component({
  selector: 'app-agregar-servicio',
  templateUrl: './agregar-servicio.component.html',
  styleUrls: ['./agregar-servicio.component.scss']
})
export class AgregarServicioComponent implements OnInit {

  agregarServicioForm = new FormGroup({
    descripcion: new FormControl('', Validators.required)
    });

  constructor( 
    private route: ActivatedRoute,
    private api: ServicioService
    ) { }

  ngOnInit(): void {}

  // TODO : Enviar el formulario a la API
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
