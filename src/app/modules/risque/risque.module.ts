import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RisqueRoutingModule } from './risque-routing.module';
import { RisqueComponent } from './risque.component';


@NgModule({
  declarations: [
    RisqueComponent
  ],
  imports: [
    CommonModule,
    RisqueRoutingModule
  ]
})
export class RisqueModule { }
