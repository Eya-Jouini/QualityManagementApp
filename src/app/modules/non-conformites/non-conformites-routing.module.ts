import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NonConformitesComponent } from './non-conformites.component';

const routes: Routes = [{ path: '', component: NonConformitesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NonConformitesRoutingModule { }
