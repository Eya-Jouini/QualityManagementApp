import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentationsComponent } from './documentations.component';
import { AccesDocumentsComponent } from './components/acces-documents/acces-documents.component';
import { BoiteDialogueComponent } from './components/boite-dialogue/boite-dialogue.component';
import { DIPerimesComponent } from './components/di-perimes/di-perimes.component';
import { MesDocumentsInternesComponent } from './components/mes-documents-internes/mes-documents-internes.component';


const routes: Routes = [{ path: '', component: DocumentationsComponent },
{path:'acces-documents' , component: AccesDocumentsComponent},
{path:'boite-dialogue' , component: BoiteDialogueComponent},
{path:'DI-perimes' , component: DIPerimesComponent},
{path:'mes-documents-internes' , component: MesDocumentsInternesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentationsRoutingModule { }
