import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InltInputTempFormComponent } from './inlt-input-temp-form.component';

describe('InltInputTempFormComponent', () => {
  let component: InltInputTempFormComponent;
  let fixture: ComponentFixture<InltInputTempFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InltInputTempFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InltInputTempFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
