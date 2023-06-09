import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelClienteComponent } from './panel-cliente.component';

describe('PanelClienteComponent', () => {
  let component: PanelClienteComponent;
  let fixture: ComponentFixture<PanelClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
