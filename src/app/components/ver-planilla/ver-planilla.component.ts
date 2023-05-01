import { Component } from '@angular/core';
import { ResponseTemplateListI } from 'src/app/models/responseTemplate.interface';
import { PlanillaService } from 'src/app/service/planilla/planilla.service';
import { Payroll } from 'src/app/models/payroll/get-payroll';

@Component({
  selector: 'app-ver-planilla',
  templateUrl: './ver-planilla.component.html',
  styleUrls: ['./ver-planilla.component.scss'],
})
export class VerPlanillaComponent{
  
  // TODO : Solicitar los payrolls de la base de datos
  planillas = new Array<Payroll>;

  constructor(private api: PlanillaService) {}

  ngOnInit(): void {
    this.getAllPayrolls();
  }

  // Se ocupa que cuando se ejecuta el getAllPayrolls se haga un await o alguna manera que podamos
  // asegurar que se le da tiempo al servidor para responder.

  getAllPayrolls(){
    
    this.api.getAllPayrolls().subscribe((data) => {
      let dataResponse: ResponseTemplateListI = data;
      
      for (let index = 0; index < dataResponse.result.length; index++) {

        console.log(index);
        console.log(dataResponse.result[index]);
        let payroll = new Payroll(
          dataResponse.result[index].empleado_cedula,
          dataResponse.result[index].nombre_planilla,
          dataResponse.result[index].salario
          );

        this.planillas.push(payroll);
        
      }

    });
    
  }

}
// let myObject: Reservacion = new Reservacion(myIDMethod, this.procedureForm.value.procedimiento_nombre);