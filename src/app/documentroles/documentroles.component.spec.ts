import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentrolesComponent } from './documentroles.component';

describe('DocumentrolesComponent', () => {
  let component: DocumentrolesComponent;
  let fixture: ComponentFixture<DocumentrolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentrolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentrolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
