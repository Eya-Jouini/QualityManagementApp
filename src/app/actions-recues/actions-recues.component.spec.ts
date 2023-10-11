import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsRecuesComponent } from './actions-recues.component';

describe('ActionsRecuesComponent', () => {
  let component: ActionsRecuesComponent;
  let fixture: ComponentFixture<ActionsRecuesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActionsRecuesComponent]
    });
    fixture = TestBed.createComponent(ActionsRecuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
