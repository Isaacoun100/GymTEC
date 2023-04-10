import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPlanillaComponent } from './ver-planilla.component';

describe('VerPlanillaComponent', () => {
  let component: VerPlanillaComponent;
  let fixture: ComponentFixture<VerPlanillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerPlanillaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerPlanillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
