import { TestBed } from '@angular/core/testing';

import { GetlabourService } from './getlabour.service';

describe('GetlabourreportService', () => {
  let service: GetlabourService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetlabourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
