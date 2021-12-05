import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesManagementpageComponent } from './services-managementpage.component';

describe('ServicesManagementpageComponent', () => {
  let component: ServicesManagementpageComponent;
  let fixture: ComponentFixture<ServicesManagementpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesManagementpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesManagementpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
