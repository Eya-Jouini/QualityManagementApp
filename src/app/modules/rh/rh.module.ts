import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RHRoutingModule } from './rh-routing.module';
import { RHComponent } from './rh.component';


@NgModule({
  declarations: [
    RHComponent
  ],
  imports: [
    CommonModule,
    RHRoutingModule
  ]
})
export class RHModule { }
