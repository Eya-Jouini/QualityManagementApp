import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonConformitesComponent } from './non-conformites.component';

describe('NonConformitesComponent', () => {
  let component: NonConformitesComponent;
  let fixture: ComponentFixture<NonConformitesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NonConformitesComponent]
    });
    fixture = TestBed.createComponent(NonConformitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
