import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-admin',
  templateUrl: './panel-admin.component.html',
  styleUrls: ['./panel-admin.component.scss'],
})
export class PanelAdminComponent implements OnInit {


  value = ''
  local = "{}";
  showProperty = false;

  /**
   * @description This method is used to initialize the component, here we get the user from the session storage
   * @version 1.0
   */
  ngOnInit(): void {
    this.local = String(sessionStorage.getItem('user'));
  }

  /**
   * @description This method is used to get the user from the session storage
   * @returns the user from the session storage
   */
  getUser(){
    return JSON.parse(this.local);
  }

  /**
   * @description This method is used to hide the password from the user
   * @version 1.0
   */
  getContrasena(){

    this.value='';

    if(this.showProperty){
      return String(this.getUser()['password']);
    }
    else{

      for (let index = 0; index < String(this.getUser()['password']).length; index++) {

        this.value=this.value+'*'
        
      }
      return this.value;
    }
  }

  /**
   * @description This method is used to hide the salary from the user
   * @version 1.0
   */
  getSalario(){

    this.value='';

    if(this.showProperty){
      return String(this.getUser()['salario']);
    }
    else{

      for (let index = 0; index < String(this.getUser()['salario']).length; index++) {

        this.value=this.value+'*'
      }
      return this.value;
    }
  }

  hidePassword(){
    this.showProperty=!this.showProperty
  }

  buttonContent(){
    if(!this.showProperty){
      return 'Show';
    }
    else{
      return 'Hide';
    }
  }
}
