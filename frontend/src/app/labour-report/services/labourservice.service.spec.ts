import { TestBed } from '@angular/core/testing';

import { LabourserviceService } from './labourservice.service';

describe('LabourserviceService', () => {
  let service: LabourserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabourserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
