import { TestBed } from '@angular/core/testing';

import { MercadoriasgrupoService } from './mercadoriasgrupo.service';

describe('MercadoriasgrupoService', () => {
  let service: MercadoriasgrupoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MercadoriasgrupoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
