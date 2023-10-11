import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AMDECComponent } from './amdec.component';

describe('AMDECComponent', () => {
  let component: AMDECComponent;
  let fixture: ComponentFixture<AMDECComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AMDECComponent]
    });
    fixture = TestBed.createComponent(AMDECComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
