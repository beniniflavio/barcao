import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendaMercadoriaComponent } from './venda-mercadoria.component';

describe('VendaMercadoriaComponent', () => {
  let component: VendaMercadoriaComponent;
  let fixture: ComponentFixture<VendaMercadoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendaMercadoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendaMercadoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
