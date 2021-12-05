import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvidercalendarComponent } from './providercalendar.component';

describe('ProvidercalendarComponent', () => {
  let component: ProvidercalendarComponent;
  let fixture: ComponentFixture<ProvidercalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvidercalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvidercalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
