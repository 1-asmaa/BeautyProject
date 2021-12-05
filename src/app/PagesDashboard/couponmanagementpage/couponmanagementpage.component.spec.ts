import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponmanagementpageComponent } from './couponmanagementpage.component';

describe('CouponmanagementpageComponent', () => {
  let component: CouponmanagementpageComponent;
  let fixture: ComponentFixture<CouponmanagementpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouponmanagementpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponmanagementpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
