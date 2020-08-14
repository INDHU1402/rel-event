import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalGatheringsComponent } from './personal-gatherings.component';

describe('PersonalGatheringsComponent', () => {
  let component: PersonalGatheringsComponent;
  let fixture: ComponentFixture<PersonalGatheringsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalGatheringsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalGatheringsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
