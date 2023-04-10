import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManejarSucursalComponent } from './manejar-sucursal.component';

describe('ManejarSucursalComponent', () => {
  let component: ManejarSucursalComponent;
  let fixture: ComponentFixture<ManejarSucursalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManejarSucursalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManejarSucursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
