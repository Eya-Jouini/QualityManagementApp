import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SDAComponent } from './sda.component';

describe('SDAComponent', () => {
  let component: SDAComponent;
  let fixture: ComponentFixture<SDAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SDAComponent]
    });
    fixture = TestBed.createComponent(SDAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
