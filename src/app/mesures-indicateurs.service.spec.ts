import { TestBed } from '@angular/core/testing';

import { MesuresIndicateursService } from './mesures-indicateurs.service';

describe('MesuresIndicateursService', () => {
  let service: MesuresIndicateursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MesuresIndicateursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
