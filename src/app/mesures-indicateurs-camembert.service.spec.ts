import { TestBed } from '@angular/core/testing';

import { MesuresIndicateursCamembertService } from './mesures-indicateurs-camembert.service';

describe('MesuresIndicateursCamembertService', () => {
  let service: MesuresIndicateursCamembertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MesuresIndicateursCamembertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
