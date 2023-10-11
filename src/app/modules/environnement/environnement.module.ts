import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnvironnementRoutingModule } from './environnement-routing.module';
import { EnvironnementComponent } from './environnement.component';


@NgModule({
  declarations: [
    EnvironnementComponent
  ],
  imports: [
    CommonModule,
    EnvironnementRoutingModule
  ]
})
export class EnvironnementModule { }
