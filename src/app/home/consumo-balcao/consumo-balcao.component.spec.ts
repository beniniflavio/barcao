import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumoBalcaoComponent } from './consumo-balcao.component';

describe('ConsumoBalcaoComponent', () => {
  let component: ConsumoBalcaoComponent;
  let fixture: ComponentFixture<ConsumoBalcaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumoBalcaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsumoBalcaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
