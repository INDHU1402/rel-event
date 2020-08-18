import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProffcartComponent } from './proffcart.component';

describe('ProffcartComponent', () => {
  let component: ProffcartComponent;
  let fixture: ComponentFixture<ProffcartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProffcartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProffcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
