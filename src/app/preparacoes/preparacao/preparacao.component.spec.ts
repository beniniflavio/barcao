import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparacaoComponent } from './preparacao.component';

describe('PreparacaoComponent', () => {
  let component: PreparacaoComponent;
  let fixture: ComponentFixture<PreparacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreparacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreparacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
