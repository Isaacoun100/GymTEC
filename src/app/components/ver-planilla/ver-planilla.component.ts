import { Component } from '@angular/core';
import { get_all_payrolls } from 'src/app/examples';
import { ResponseTemplateI } from 'src/app/models/responseTemplate.interface';
import { PlanillaService } from 'src/app/service/planilla/planilla.service';

@Component({
  selector: 'app-ver-planilla',
  templateUrl: './ver-planilla.component.html',
  styleUrls: ['./ver-planilla.component.scss'],
})
export class VerPlanillaComponent {
  // TODO : Solicitar los payrolls de la base de datos
  planillas = get_all_payrolls;

  constructor(private api: PlanillaService) {
    // this.getAllPayrolls();
  }

  getAllPayrolls() {
    this.api.getAllPayrolls().subscribe((data) => {
      let dataResponse: ResponseTemplateI = data;
      console.log(dataResponse.result);

      return dataResponse.result;
    });
  }
}
