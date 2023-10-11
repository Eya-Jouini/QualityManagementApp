import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SDARoutingModule } from './sda-routing.module';
import { SDAComponent } from './sda.component';


@NgModule({
  declarations: [
    SDAComponent
  ],
  imports: [
    CommonModule,
    SDARoutingModule
  ]
})
export class SDAModule { }
