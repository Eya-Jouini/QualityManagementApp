import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AchatsRoutingModule } from './achats-routing.module';
import { AchatsComponent } from './achats.component';


@NgModule({
  declarations: [
    AchatsComponent
  ],
  imports: [
    CommonModule,
    AchatsRoutingModule
  ]
})
export class AchatsModule { }
