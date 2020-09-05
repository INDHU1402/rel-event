import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogyformComponent } from './blogyform.component';

describe('BlogyformComponent', () => {
  let component: BlogyformComponent;
  let fixture: ComponentFixture<BlogyformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogyformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogyformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
