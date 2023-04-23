import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-admin',
  templateUrl: './panel-admin.component.html',
  styleUrls: ['./panel-admin.component.scss'],
})
export class PanelAdminComponent implements OnInit {

  local = "{}";
  showProperty = false;

  ngOnInit(): void {
    this.local = String(localStorage.getItem('user'));
  }

  getUser(){
    return JSON.parse(this.local);
  }

  getContrasena(){
    if(this.showProperty){
      return String(this.getUser()['password']);
    }
    else{
      return "***********";
    }
  }

  getSalario(){
    if(this.showProperty){
      return String(this.getUser()['salario']);
    }
    else{
      return "***********";
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
