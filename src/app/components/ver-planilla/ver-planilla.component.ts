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

  /**
   * @description This is the array of payrolls
   * @version 1.0
   */
  planillas = new Array<Payroll>;

  /**
   * @description This method is used to initialize the component
   * @param api 
   * @version 1.0
   */
  constructor(private api: PlanillaService) {}

  /**
   * @description This method is used to execute the GetAllPayrolls method when the component is created
   * @version 1.0
   */
  ngOnInit(): void {
    this.getAllPayrolls();
  }

  /**
   * @description This method is used to get all of the payrolls
   * @version 1.0
   */
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