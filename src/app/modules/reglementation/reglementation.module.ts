import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReglementationRoutingModule } from './reglementation-routing.module';
import { ReglementationComponent } from './reglementation.component';


@NgModule({
  declarations: [
    ReglementationComponent
  ],
  imports: [
    CommonModule,
    ReglementationRoutingModule
  ]
})
export class ReglementationModule { }
