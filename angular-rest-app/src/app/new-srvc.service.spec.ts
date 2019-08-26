import { TestBed } from '@angular/core/testing';

import { NewSrvcService } from './new-srvc.service';

describe('NewSrvcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewSrvcService = TestBed.get(NewSrvcService);
    expect(service).toBeTruthy();
  });
});
