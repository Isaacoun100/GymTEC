import { TestBed } from '@angular/core/testing';

import { ProxyEquipoService } from './proxy-equipo.service';

describe('ProxyEquipoService', () => {
  let service: ProxyEquipoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProxyEquipoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
