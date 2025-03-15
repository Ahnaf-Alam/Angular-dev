import { TestBed } from '@angular/core/testing';

import { AssignSubjectServiceService } from './assign-subject-service.service';

describe('AssignSubjectServiceService', () => {
  let service: AssignSubjectServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssignSubjectServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
