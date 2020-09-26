import { TestBed } from '@angular/core/testing';

import { AngServiceService } from './ang-service.service';

describe('AngServiceService', () => {
  let service: AngServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
