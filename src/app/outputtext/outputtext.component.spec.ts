import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputtextComponent } from './outputtext.component';

describe('OutputtextComponent', () => {
  let component: OutputtextComponent;
  let fixture: ComponentFixture<OutputtextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputtextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputtextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
