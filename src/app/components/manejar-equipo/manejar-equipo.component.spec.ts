import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManejarEquipoComponent } from './manejar-equipo.component';

describe('ManejarEquipoComponent', () => {
  let component: ManejarEquipoComponent;
  let fixture: ComponentFixture<ManejarEquipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManejarEquipoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManejarEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
