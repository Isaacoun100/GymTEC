import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManejarInventarioComponent } from './manejar-inventario.component';

describe('ManejarInventarioComponent', () => {
  let component: ManejarInventarioComponent;
  let fixture: ComponentFixture<ManejarInventarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManejarInventarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManejarInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
