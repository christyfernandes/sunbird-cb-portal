import { TestBed } from '@angular/core/testing';

import { SCORMExternalService } from './scorm-external.service';

describe('SCORMExternalService', () => {
  let service: SCORMExternalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SCORMExternalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
