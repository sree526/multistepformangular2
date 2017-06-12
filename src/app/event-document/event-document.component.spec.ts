import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDocumentComponent } from './event-document.component';

describe('EventDocumentComponent', () => {
  let component: EventDocumentComponent;
  let fixture: ComponentFixture<EventDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
