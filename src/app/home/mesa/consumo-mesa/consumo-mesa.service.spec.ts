import { TestBed } from '@angular/core/testing';

import { ConsumoMesaService } from './consumo-mesa.service';

describe('ConsumoMesaService', () => {
  let service: ConsumoMesaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsumoMesaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
