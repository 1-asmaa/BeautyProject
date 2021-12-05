import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewbeautproviderComponent } from './newbeautprovider.component';

describe('NewbeautproviderComponent', () => {
  let component: NewbeautproviderComponent;
  let fixture: ComponentFixture<NewbeautproviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewbeautproviderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewbeautproviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
