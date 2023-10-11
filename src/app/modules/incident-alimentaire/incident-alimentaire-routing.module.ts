import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncidentAlimentaireComponent } from './incident-alimentaire.component';

const routes: Routes = [{ path: '', component: IncidentAlimentaireComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncidentAlimentaireRoutingModule { }
