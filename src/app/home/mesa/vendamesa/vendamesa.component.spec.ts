import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendamesaComponent } from './vendamesa.component';

describe('VendamesaComponent', () => {
  let component: VendamesaComponent;
  let fixture: ComponentFixture<VendamesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendamesaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendamesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
