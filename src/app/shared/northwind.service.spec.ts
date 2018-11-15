import { TestBed } from '@angular/core/testing';

import { NorthwindService } from './northwind.service';

describe('NorthwindService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NorthwindService = TestBed.get(NorthwindService);
    expect(service).toBeTruthy();
  });
});
