import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicatorcardListComponent } from './indicator-card-list.component';

describe('IndicatorcardListComponent', () => {
  let component: IndicatorcardListComponent;
  let fixture: ComponentFixture<IndicatorcardListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndicatorcardListComponent]
    });
    fixture = TestBed.createComponent(IndicatorcardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
