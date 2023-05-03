import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MercadoriasgrupoComponent } from './mercadoriasgrupo.component';

describe('MercadoriasgrupoComponent', () => {
  let component: MercadoriasgrupoComponent;
  let fixture: ComponentFixture<MercadoriasgrupoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MercadoriasgrupoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MercadoriasgrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
