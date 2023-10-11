import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicatorsDoughnutModalComponent } from './indicators-doughnut-modal.component';

describe('IndicatorsDoughnutModalComponent', () => {
  let component: IndicatorsDoughnutModalComponent;
  let fixture: ComponentFixture<IndicatorsDoughnutModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndicatorsDoughnutModalComponent]
    });
    fixture = TestBed.createComponent(IndicatorsDoughnutModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
