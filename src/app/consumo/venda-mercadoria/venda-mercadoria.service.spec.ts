import { TestBed } from '@angular/core/testing';

import { VendaMercadoriaService } from './venda-mercadoria.service';

describe('VendaMercadoriaService', () => {
  let service: VendaMercadoriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendaMercadoriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
