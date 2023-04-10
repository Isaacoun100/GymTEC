import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManejarProductoComponent } from './manejar-producto.component';

describe('ManejarProductoComponent', () => {
  let component: ManejarProductoComponent;
  let fixture: ComponentFixture<ManejarProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManejarProductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManejarProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
