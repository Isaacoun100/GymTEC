import { Component } from '@angular/core';
import { get_all_payrolls } from 'src/app/examples';

@Component({
  selector: 'app-ver-planilla',
  templateUrl: './ver-planilla.component.html',
  styleUrls: ['./ver-planilla.component.scss']
})
export class VerPlanillaComponent {

  // TODO : Solicitar los payrolls de la base de datos
  planillas = get_all_payrolls;
}