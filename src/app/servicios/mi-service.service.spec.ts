import { TestBed } from '@angular/core/testing';

import { MiServiceService } from './mi-service.service';

describe('MiServiceService', () => {
  let service: MiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
