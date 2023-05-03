import { TestBed } from '@angular/core/testing';

import { CarrinhoBalcaoService } from './carrinho-balcao.service';

describe('CarrinhoBalcaoService', () => {
  let service: CarrinhoBalcaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarrinhoBalcaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
