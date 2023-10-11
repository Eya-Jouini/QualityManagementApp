import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReglementationComponent } from './reglementation.component';

const routes: Routes = [{ path: '', component: ReglementationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReglementationRoutingModule { }
