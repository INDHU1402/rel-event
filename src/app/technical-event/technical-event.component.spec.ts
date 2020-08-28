import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalEventComponent } from './technical-event.component';

describe('TechnicalEventComponent', () => {
  let component: TechnicalEventComponent;
  let fixture: ComponentFixture<TechnicalEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnicalEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
