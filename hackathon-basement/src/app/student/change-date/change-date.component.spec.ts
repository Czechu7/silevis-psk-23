import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDateComponent } from './change-date.component';

describe('ChangeDateComponent', () => {
  let component: ChangeDateComponent;
  let fixture: ComponentFixture<ChangeDateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangeDateComponent]
    });
    fixture = TestBed.createComponent(ChangeDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
