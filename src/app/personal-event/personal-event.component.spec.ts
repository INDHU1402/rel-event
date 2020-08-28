import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalEventComponent } from './personal-event.component';

describe('PersonalEventComponent', () => {
  let component: PersonalEventComponent;
  let fixture: ComponentFixture<PersonalEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
