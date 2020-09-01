import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfcartComponent } from './profcart.component';

describe('ProfcartComponent', () => {
  let component: ProfcartComponent;
  let fixture: ComponentFixture<ProfcartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfcartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
