import { TestBed } from '@angular/core/testing';

import { IntermediaireModalIndicatorCardlistService } from './intermediaire-modal-indicatorcardlist.service';

describe('IntermediaireModalIndicatorcardlistService', () => {
  let service: IntermediaireModalIndicatorCardlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntermediaireModalIndicatorCardlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
