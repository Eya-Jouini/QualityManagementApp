import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NonConformitesRoutingModule } from './non-conformites-routing.module';
import { NonConformitesComponent } from './non-conformites.component';


@NgModule({
  declarations: [
    NonConformitesComponent
  ],
  imports: [
    CommonModule,
    NonConformitesRoutingModule
  ]
})
export class NonConformitesModule { }
