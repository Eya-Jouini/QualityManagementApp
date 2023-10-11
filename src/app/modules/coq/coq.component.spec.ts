import { ComponentFixture, TestBed } from '@angular/core/testing';

import { COQComponent } from './coq.component';

describe('COQComponent', () => {
  let component: COQComponent;
  let fixture: ComponentFixture<COQComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [COQComponent]
    });
    fixture = TestBed.createComponent(COQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
