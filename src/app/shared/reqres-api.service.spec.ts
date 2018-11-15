import { TestBed } from '@angular/core/testing';

import { ReqresApiService } from './reqres-api.service';

describe('ReqresApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReqresApiService = TestBed.get(ReqresApiService);
    expect(service).toBeTruthy();
  });
});
