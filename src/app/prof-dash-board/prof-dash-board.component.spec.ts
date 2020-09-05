import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfDashBoardComponent } from './prof-dash-board.component';

describe('ProfDashBoardComponent', () => {
  let component: ProfDashBoardComponent;
  let fixture: ComponentFixture<ProfDashBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfDashBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
