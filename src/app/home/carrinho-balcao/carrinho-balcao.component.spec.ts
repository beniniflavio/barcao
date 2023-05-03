import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrinhoBalcaoComponent } from './carrinho-balcao.component';

describe('CarrinhoBalcaoComponent', () => {
  let component: CarrinhoBalcaoComponent;
  let fixture: ComponentFixture<CarrinhoBalcaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrinhoBalcaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrinhoBalcaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
