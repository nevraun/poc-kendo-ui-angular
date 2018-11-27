import { TestBed } from '@angular/core/testing';

import { OrdersdService } from './ordersd.service';

describe('OrdersdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrdersdService = TestBed.get(OrdersdService);
    expect(service).toBeTruthy();
  });
});
