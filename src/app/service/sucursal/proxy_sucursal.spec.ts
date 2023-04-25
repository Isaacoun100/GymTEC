import { TestBed } from '@angular/core/testing';

import { ProxySucursalService } from './proxy-sucursal.service';

describe('ProxyServiceService', () => {
  let service: ProxySucursalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProxySucursalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});