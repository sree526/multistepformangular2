import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientNameEntryComponent } from './client-name-entry.component';

describe('ClientNameEntryComponent', () => {
  let component: ClientNameEntryComponent;
  let fixture: ComponentFixture<ClientNameEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientNameEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientNameEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
