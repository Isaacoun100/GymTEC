import { TestBed } from '@angular/core/testing';

import { ProxyEmpleadoService } from './proxy-empleado.service';

describe('ProxyEmpleadoService', () => {
  let service: ProxyEmpleadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProxyEmpleadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
