import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SucursalService } from 'src/app/service/sucursal/sucursal.service';
import { ResponseTemplateListBranchesI } from 'src/app/models/responseTemplate.interface';
import { Branch } from 'src/app/models/branch/get-branch';

@Component({
  selector: 'app-manejar-sucursal',
  templateUrl: './manejar-sucursal.component.html',
  styleUrls: ['./manejar-sucursal.component.scss']
})
export class ManejarSucursalComponent implements OnInit{

  // TODO: Cambiar el arreglo de ejemplo por el arreglo de sucursales que se obtiene de la base de datos
  branches = new Array<Branch>();

  constructor(private api: SucursalService, private router: Router){}

  ngOnInit(): void {
    this.getAllBranches();
  }

  getAllBranches(){
    this.api.getAllBranches().subscribe((data) => {
      let dataResponse: ResponseTemplateListBranchesI = data;
      console.log(dataResponse);
      for (let index = 0; index < dataResponse.result.length; index++) {
        console.log(index);
        let branch = new Branch( dataResponse.result[index].nombre_sucursal );
        this.branches.push(branch);
      }

    });
  }
  agregarSucursal(){
    this.router.navigate(['agregarSucursal']);
   }

}
