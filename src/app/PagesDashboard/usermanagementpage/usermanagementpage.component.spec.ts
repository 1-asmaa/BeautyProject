import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermanagementpageComponent } from './usermanagementpage.component';

describe('UsermanagementpageComponent', () => {
  let component: UsermanagementpageComponent;
  let fixture: ComponentFixture<UsermanagementpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsermanagementpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsermanagementpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
