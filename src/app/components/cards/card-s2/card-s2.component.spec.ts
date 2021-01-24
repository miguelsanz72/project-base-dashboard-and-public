import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardS2Component } from './card-s2.component';

describe('CardS2Component', () => {
  let component: CardS2Component;
  let fixture: ComponentFixture<CardS2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardS2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardS2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
