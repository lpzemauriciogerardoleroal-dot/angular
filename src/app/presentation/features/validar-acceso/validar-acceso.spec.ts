import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarAcceso } from './validar-acceso';

describe('ValidarAcceso', () => {
  let component: ValidarAcceso;
  let fixture: ComponentFixture<ValidarAcceso>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidarAcceso],
    }).compileComponents();

    fixture = TestBed.createComponent(ValidarAcceso);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
