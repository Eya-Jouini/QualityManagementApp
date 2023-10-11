import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SDAComponent } from './sda.component';

const routes: Routes = [{ path: '', component: SDAComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SDARoutingModule { }
