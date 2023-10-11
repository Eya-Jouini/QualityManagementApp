import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DIPerimesComponent } from './di-perimes.component';

describe('DIPerimesComponent', () => {
  let component: DIPerimesComponent;
  let fixture: ComponentFixture<DIPerimesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DIPerimesComponent]
    });
    fixture = TestBed.createComponent(DIPerimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
