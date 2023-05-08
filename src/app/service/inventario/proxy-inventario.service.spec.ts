import { TestBed } from '@angular/core/testing';

import { ProxyInventarioService } from './proxy-inventario.service';

describe('ProxyInventarioService', () => {
  let service: ProxyInventarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProxyInventarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
