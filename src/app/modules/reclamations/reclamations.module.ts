import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReclamationsRoutingModule } from './reclamations-routing.module';
import { ReclamationsComponent } from './reclamations.component';


@NgModule({
  declarations: [
    ReclamationsComponent
  ],
  imports: [
    CommonModule,
    ReclamationsRoutingModule
  ]
})
export class ReclamationsModule { }
