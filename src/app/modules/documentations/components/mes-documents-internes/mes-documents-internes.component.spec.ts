import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesDocumentsInternesComponent } from './mes-documents-internes.component';

describe('MesDocumentsInternesComponent', () => {
  let component: MesDocumentsInternesComponent;
  let fixture: ComponentFixture<MesDocumentsInternesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MesDocumentsInternesComponent]
    });
    fixture = TestBed.createComponent(MesDocumentsInternesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
