import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumoMesaComponent } from './consumo-mesa.component';

describe('ConsumoMesaComponent', () => {
  let component: ConsumoMesaComponent;
  let fixture: ComponentFixture<ConsumoMesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumoMesaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsumoMesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
