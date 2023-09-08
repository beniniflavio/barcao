import { TestBed } from '@angular/core/testing';

import { BalcaoService } from './balcao.service';

describe('BalcaoService', () => {
  let service: BalcaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BalcaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
