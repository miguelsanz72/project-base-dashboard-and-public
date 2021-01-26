import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BurndownChartComponent } from './burndown-chart.component';

describe('BurndownChartComponent', () => {
  let component: BurndownChartComponent;
  let fixture: ComponentFixture<BurndownChartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BurndownChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BurndownChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
