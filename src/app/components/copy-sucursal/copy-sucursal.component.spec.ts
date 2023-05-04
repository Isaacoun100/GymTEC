import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopySucursalComponent } from './copy-sucursal.component';

describe('CopySucursalComponent', () => {
  let component: CopySucursalComponent;
  let fixture: ComponentFixture<CopySucursalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopySucursalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CopySucursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
