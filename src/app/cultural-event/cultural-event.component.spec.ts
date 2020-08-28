import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturalEventComponent } from './cultural-event.component';

describe('CulturalEventComponent', () => {
  let component: CulturalEventComponent;
  let fixture: ComponentFixture<CulturalEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CulturalEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CulturalEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
