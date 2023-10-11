import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsEnRetardComponent } from './actions-en-retard.component';

describe('ActionsEnRetardComponent', () => {
  let component: ActionsEnRetardComponent;
  let fixture: ComponentFixture<ActionsEnRetardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActionsEnRetardComponent]
    });
    fixture = TestBed.createComponent(ActionsEnRetardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
