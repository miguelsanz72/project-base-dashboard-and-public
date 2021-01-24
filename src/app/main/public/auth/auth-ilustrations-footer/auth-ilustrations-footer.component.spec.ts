import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AuthIlustrationsFooterComponent } from './auth-ilustrations-footer.component';

describe('AuthIlustrationsFooterComponent', () => {
  let component: AuthIlustrationsFooterComponent;
  let fixture: ComponentFixture<AuthIlustrationsFooterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthIlustrationsFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthIlustrationsFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
