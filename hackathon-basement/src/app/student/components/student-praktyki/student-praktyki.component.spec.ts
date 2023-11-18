import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPraktykiComponent } from './student-praktyki.component';

describe('StudentPraktykiComponent', () => {
  let component: StudentPraktykiComponent;
  let fixture: ComponentFixture<StudentPraktykiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentPraktykiComponent]
    });
    fixture = TestBed.createComponent(StudentPraktykiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
