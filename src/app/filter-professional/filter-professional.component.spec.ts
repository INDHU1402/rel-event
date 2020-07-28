import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterProfessionalComponent } from './filter-professional.component';

describe('FilterProfessionalComponent', () => {
  let component: FilterProfessionalComponent;
  let fixture: ComponentFixture<FilterProfessionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterProfessionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterProfessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
