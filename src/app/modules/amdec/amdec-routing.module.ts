import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AMDECComponent } from './amdec.component';

const routes: Routes = [{ path: '', component: AMDECComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AMDECRoutingModule { }
