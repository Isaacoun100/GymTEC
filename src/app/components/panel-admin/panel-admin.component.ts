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

  ngOnInit(): void {
    this.local = String(sessionStorage.getItem('user'));
  }

  getUser(){
    return JSON.parse(this.local);
  }

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

  constructor() {}
}
