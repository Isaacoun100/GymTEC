import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsociarTratamientoComponent } from './asociar-tratamiento.component';

describe('AsociarTratamientoComponent', () => {
  let component: AsociarTratamientoComponent;
  let fixture: ComponentFixture<AsociarTratamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsociarTratamientoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsociarTratamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
