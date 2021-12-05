import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitymanagementpageComponent } from './citymanagementpage.component';

describe('CitymanagementpageComponent', () => {
  let component: CitymanagementpageComponent;
  let fixture: ComponentFixture<CitymanagementpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitymanagementpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitymanagementpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
