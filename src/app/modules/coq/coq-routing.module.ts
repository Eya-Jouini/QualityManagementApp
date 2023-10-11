import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { COQComponent } from './coq.component';

const routes: Routes = [{ path: '', component: COQComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class COQRoutingModule { }
