import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesDocumentsComponent } from './acces-documents.component';

describe('AccesDocumentsComponent', () => {
  let component: AccesDocumentsComponent;
  let fixture: ComponentFixture<AccesDocumentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccesDocumentsComponent]
    });
    fixture = TestBed.createComponent(AccesDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
