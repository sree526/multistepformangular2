import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlobeventsComponent } from './slobevents.component';

describe('SlobeventsComponent', () => {
  let component: SlobeventsComponent;
  let fixture: ComponentFixture<SlobeventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlobeventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlobeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
