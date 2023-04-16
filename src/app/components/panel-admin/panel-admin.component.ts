import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-admin',
  templateUrl: './panel-admin.component.html',
  styleUrls: ['./panel-admin.component.scss'],
})
export class PanelAdminComponent implements OnInit {
  local = localStorage.getItem('user');

  ngOnInit(): void {}
  constructor() {}
}
