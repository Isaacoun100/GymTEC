import { TestBed } from '@angular/core/testing';

import { ProxyProductoService } from './proxy-producto.service';

describe('ProxyProductoService', () => {
  let service: ProxyProductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProxyProductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
