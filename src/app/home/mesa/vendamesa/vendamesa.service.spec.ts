import { TestBed } from '@angular/core/testing';

import { VendamesaService } from './vendamesa.service';

describe('VendamesaService', () => {
  let service: VendamesaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendamesaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
