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

  /**
   * @description This is the array of branches
   * @version 1.0
   */
  branches = new Array<Branch>();

  /**
   * @description This method is used to initialize the component
   * @param api 
   * @param router 
   */
  constructor(private api: SucursalService, private router: Router){}

  /**
   * @description This method is used to initialize the component, here we get all the branches from the database
   * @version 1.0
   */
  ngOnInit(): void {
    this.getAllBranches();
  }

  /**
   * @description This method is used to get all the branches from the database
   * @version 1.0
   */
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

  /**
   * @description Routes the admin to the AgregarSucursal component
   * @version 1.0
   */
  agregarSucursal(){
    this.router.navigate(['agregarSucursal']);
   }

}
