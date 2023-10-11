import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentationsRoutingModule } from './documentations-routing.module';
import { DocumentationsComponent } from './documentations.component';
import { MesDocumentsInternesComponent } from './components/mes-documents-internes/mes-documents-internes.component';
import { DIPerimesComponent } from './components/di-perimes/di-perimes.component';
import { AccesDocumentsComponent } from './components/acces-documents/acces-documents.component';
import { BoiteDialogueComponent } from './components/boite-dialogue/boite-dialogue.component';


@NgModule({
  declarations: [
    DocumentationsComponent,
    MesDocumentsInternesComponent,
    DIPerimesComponent,
    AccesDocumentsComponent,
    BoiteDialogueComponent
  ],
  imports: [
    CommonModule,
    DocumentationsRoutingModule
  ]
})
export class DocumentationsModule { }
