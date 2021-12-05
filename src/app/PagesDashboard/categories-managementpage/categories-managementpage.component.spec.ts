import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesManagementpageComponent } from './categories-managementpage.component';

describe('CategoriesManagementpageComponent', () => {
  let component: CategoriesManagementpageComponent;
  let fixture: ComponentFixture<CategoriesManagementpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesManagementpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesManagementpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
