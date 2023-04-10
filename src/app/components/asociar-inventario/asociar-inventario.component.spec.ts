import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsociarInventarioComponent } from './asociar-inventario.component';

describe('AsociarInventarioComponent', () => {
  let component: AsociarInventarioComponent;
  let fixture: ComponentFixture<AsociarInventarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsociarInventarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsociarInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
