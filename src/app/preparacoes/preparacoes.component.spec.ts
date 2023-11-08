import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparacoesComponent } from './preparacoes.component';

describe('PreparacoesComponent', () => {
  let component: PreparacoesComponent;
  let fixture: ComponentFixture<PreparacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreparacoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreparacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
