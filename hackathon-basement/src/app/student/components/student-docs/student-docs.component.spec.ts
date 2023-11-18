import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDocsComponent } from './student-docs.component';

describe('StudentDocsComponent', () => {
  let component: StudentDocsComponent;
  let fixture: ComponentFixture<StudentDocsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentDocsComponent]
    });
    fixture = TestBed.createComponent(StudentDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
