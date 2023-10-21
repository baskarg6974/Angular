import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PutdialogComponent } from './putdialog.component';

describe('PutdialogComponent', () => {
  let component: PutdialogComponent;
  let fixture: ComponentFixture<PutdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PutdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PutdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
