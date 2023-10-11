import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangementComponent } from './changement.component';

const routes: Routes = [{ path: '', component: ChangementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChangementRoutingModule { }
