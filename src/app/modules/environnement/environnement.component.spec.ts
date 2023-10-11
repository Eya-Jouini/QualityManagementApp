import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironnementComponent } from './environnement.component';

describe('EnvironnementComponent', () => {
  let component: EnvironnementComponent;
  let fixture: ComponentFixture<EnvironnementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnvironnementComponent]
    });
    fixture = TestBed.createComponent(EnvironnementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
