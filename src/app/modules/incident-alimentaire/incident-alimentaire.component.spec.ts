import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentAlimentaireComponent } from './incident-alimentaire.component';

describe('IncidentAlimentaireComponent', () => {
  let component: IncidentAlimentaireComponent;
  let fixture: ComponentFixture<IncidentAlimentaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncidentAlimentaireComponent]
    });
    fixture = TestBed.createComponent(IncidentAlimentaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
