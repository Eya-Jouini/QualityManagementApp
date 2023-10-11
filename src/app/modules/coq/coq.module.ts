import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { COQRoutingModule } from './coq-routing.module';
import { COQComponent } from './coq.component';


@NgModule({
  declarations: [
    COQComponent
  ],
  imports: [
    CommonModule,
    COQRoutingModule
  ]
})
export class COQModule { }
