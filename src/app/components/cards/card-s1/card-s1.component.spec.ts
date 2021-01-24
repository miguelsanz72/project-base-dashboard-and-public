import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardS1Component } from './card-s1.component';

describe('CardS1Component', () => {
  let component: CardS1Component;
  let fixture: ComponentFixture<CardS1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardS1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardS1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
