import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconImageFisrtLetterComponent } from './icon-image-fisrt-letter.component';

describe('IconImageFisrtLetterComponent', () => {
  let component: IconImageFisrtLetterComponent;
  let fixture: ComponentFixture<IconImageFisrtLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconImageFisrtLetterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconImageFisrtLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
