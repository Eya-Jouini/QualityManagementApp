import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReglementationComponent } from './reglementation.component';

describe('ReglementationComponent', () => {
  let component: ReglementationComponent;
  let fixture: ComponentFixture<ReglementationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReglementationComponent]
    });
    fixture = TestBed.createComponent(ReglementationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
