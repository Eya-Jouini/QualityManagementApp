import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSideDivComponent } from './right-side-div.component';

describe('RightSideDivComponent', () => {
  let component: RightSideDivComponent;
  let fixture: ComponentFixture<RightSideDivComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RightSideDivComponent]
    });
    fixture = TestBed.createComponent(RightSideDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
