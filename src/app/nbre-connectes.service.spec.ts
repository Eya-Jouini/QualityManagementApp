import { TestBed } from '@angular/core/testing';

import { NbreConnectesService } from './nbre-connectes.service';

describe('NbreConnectesService', () => {
  let service: NbreConnectesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NbreConnectesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
