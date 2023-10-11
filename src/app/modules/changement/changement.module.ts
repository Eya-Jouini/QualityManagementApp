import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangementRoutingModule } from './changement-routing.module';
import { ChangementComponent } from './changement.component';


@NgModule({
  declarations: [
    ChangementComponent
  ],
  imports: [
    CommonModule,
    ChangementRoutingModule
  ]
})
export class ChangementModule { }
