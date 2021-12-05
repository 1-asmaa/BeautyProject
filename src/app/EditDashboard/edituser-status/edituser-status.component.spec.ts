import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdituserStatusComponent } from './edituser-status.component';

describe('EdituserStatusComponent', () => {
  let component: EdituserStatusComponent;
  let fixture: ComponentFixture<EdituserStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdituserStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdituserStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
