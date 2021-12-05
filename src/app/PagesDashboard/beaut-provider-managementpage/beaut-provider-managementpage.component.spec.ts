import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautProviderManagementpageComponent } from './beaut-provider-managementpage.component';

describe('BeautProviderManagementpageComponent', () => {
  let component: BeautProviderManagementpageComponent;
  let fixture: ComponentFixture<BeautProviderManagementpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeautProviderManagementpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeautProviderManagementpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
