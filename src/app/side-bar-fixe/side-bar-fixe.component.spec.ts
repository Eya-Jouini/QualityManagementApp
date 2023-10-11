import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarFixeComponent } from './side-bar-fixe.component';

describe('SideBarFixeComponent', () => {
  let component: SideBarFixeComponent;
  let fixture: ComponentFixture<SideBarFixeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideBarFixeComponent]
    });
    fixture = TestBed.createComponent(SideBarFixeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
