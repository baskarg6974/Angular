import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentaccessComponent } from './departmentaccess.component';

describe('DepartmentaccessComponent', () => {
  let component: DepartmentaccessComponent;
  let fixture: ComponentFixture<DepartmentaccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentaccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentaccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
