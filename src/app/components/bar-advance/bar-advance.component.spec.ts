import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarAdvanceComponent } from './bar-advance.component';

describe('BarAdvanceComponent', () => {
  let component: BarAdvanceComponent;
  let fixture: ComponentFixture<BarAdvanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarAdvanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarAdvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
