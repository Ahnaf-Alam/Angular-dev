import { TestBed } from '@angular/core/testing';

import { UpdateResultServiceService } from './update-result-service.service';

describe('UpdateResultServiceService', () => {
  let service: UpdateResultServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateResultServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
