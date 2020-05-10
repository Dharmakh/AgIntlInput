import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntlInputComponent } from './intl-input.component';

describe('IntlInputComponent', () => {
  let component: IntlInputComponent;
  let fixture: ComponentFixture<IntlInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntlInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntlInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
