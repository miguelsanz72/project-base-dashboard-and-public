import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteScreenComponent } from './white-screen.component';

describe('WhiteScreenComponent', () => {
  let component: WhiteScreenComponent;
  let fixture: ComponentFixture<WhiteScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhiteScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhiteScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
