import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriseRDVPage } from './prise-rdv.page';

describe('PriseRDVPage', () => {
  let component: PriseRDVPage;
  let fixture: ComponentFixture<PriseRDVPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriseRDVPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriseRDVPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
