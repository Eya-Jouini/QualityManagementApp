import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepresentationGraphiqueComponent } from './representation-graphique.component';

describe('RepresentationGraphiqueComponent', () => {
  let component: RepresentationGraphiqueComponent;
  let fixture: ComponentFixture<RepresentationGraphiqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepresentationGraphiqueComponent]
    });
    fixture = TestBed.createComponent(RepresentationGraphiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
