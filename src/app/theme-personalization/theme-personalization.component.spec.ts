import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemePersonalizationComponent } from './theme-personalization.component';

describe('ThemePersonalizationComponent', () => {
  let component: ThemePersonalizationComponent;
  let fixture: ComponentFixture<ThemePersonalizationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThemePersonalizationComponent]
    });
    fixture = TestBed.createComponent(ThemePersonalizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
