import { TestBed } from '@angular/core/testing';

import { ConsumoBalcaoService } from './consumo-balcao.service';

describe('ConsumoBalcaoService', () => {
  let service: ConsumoBalcaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsumoBalcaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
