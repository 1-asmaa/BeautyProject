import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBeautComponent } from './view-beaut.component';

describe('ViewBeautComponent', () => {
  let component: ViewBeautComponent;
  let fixture: ComponentFixture<ViewBeautComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBeautComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBeautComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
