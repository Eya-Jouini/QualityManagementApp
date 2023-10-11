import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepresentationCamembertComponent } from './representation-camembert.component';

describe('RepresentationCamembertComponent', () => {
  let component: RepresentationCamembertComponent;
  let fixture: ComponentFixture<RepresentationCamembertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepresentationCamembertComponent]
    });
    fixture = TestBed.createComponent(RepresentationCamembertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
