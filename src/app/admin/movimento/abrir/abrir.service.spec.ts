import { TestBed } from '@angular/core/testing';

import { AbrirService } from './abrir.service';

describe('AbrirService', () => {
  let service: AbrirService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbrirService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
