import { TestBed } from '@angular/core/testing';

import { ActionsRecuesService } from './actions-recues.service';

describe('ActionsRecuesService', () => {
  let service: ActionsRecuesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActionsRecuesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
