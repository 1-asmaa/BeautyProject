import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentandratingpageComponent } from './commentandratingpage.component';

describe('CommentandratingpageComponent', () => {
  let component: CommentandratingpageComponent;
  let fixture: ComponentFixture<CommentandratingpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentandratingpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentandratingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
