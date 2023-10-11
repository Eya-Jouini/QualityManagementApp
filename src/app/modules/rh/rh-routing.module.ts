import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RHComponent } from './rh.component';

const routes: Routes = [{ path: '', component: RHComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RHRoutingModule { }
