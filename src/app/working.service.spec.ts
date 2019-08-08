import { TestBed } from '@angular/core/testing';

import { WorkingService } from './working.service';

describe('WorkingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorkingService = TestBed.get(WorkingService);
    expect(service).toBeTruthy();
  });
});
