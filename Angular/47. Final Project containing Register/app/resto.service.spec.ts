import { TestBed } from '@angular/core/testing';

import { RestoService } from './resto.service';

describe('RestoService', () => {
  let service: RestoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
