import { TestBed } from '@angular/core/testing';

import { StudentDocsService } from './student-docs.service';

describe('StudentDocsService', () => {
  let service: StudentDocsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentDocsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
