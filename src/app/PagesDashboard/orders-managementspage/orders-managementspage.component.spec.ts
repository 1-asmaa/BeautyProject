import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersManagementspageComponent } from './orders-managementspage.component';

describe('OrdersManagementspageComponent', () => {
  let component: OrdersManagementspageComponent;
  let fixture: ComponentFixture<OrdersManagementspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersManagementspageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersManagementspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
