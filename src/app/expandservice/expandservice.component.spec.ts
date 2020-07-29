import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandserviceComponent } from './expandservice.component';

describe('ExpandserviceComponent', () => {
  let component: ExpandserviceComponent;
  let fixture: ComponentFixture<ExpandserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpandserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
