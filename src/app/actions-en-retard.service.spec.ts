import { TestBed } from '@angular/core/testing';

import { ActionsEnRetardService } from './actions-en-retard.service';

describe('ActionsEnRetardService', () => {
  let service: ActionsEnRetardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActionsEnRetardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
