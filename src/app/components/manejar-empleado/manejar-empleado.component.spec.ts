import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManejarEmpleadoComponent } from './manejar-empleado.component';

describe('ManejarEmpleadoComponent', () => {
  let component: ManejarEmpleadoComponent;
  let fixture: ComponentFixture<ManejarEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManejarEmpleadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManejarEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
