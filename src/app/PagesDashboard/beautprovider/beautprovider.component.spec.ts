import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautproviderComponent } from './beautprovider.component';

describe('BeautproviderComponent', () => {
  let component: BeautproviderComponent;
  let fixture: ComponentFixture<BeautproviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeautproviderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeautproviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
