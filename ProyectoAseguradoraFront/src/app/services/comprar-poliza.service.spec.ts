import { TestBed } from '@angular/core/testing';

import { ComprarPolizaService } from './comprar-poliza.service';

describe('ComprarPolizaService', () => {
  let service: ComprarPolizaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComprarPolizaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
