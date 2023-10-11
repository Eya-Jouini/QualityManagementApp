import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndicateurRoutingModule } from './indicateur-routing.module';
import { IndicateurComponent } from './indicateur.component';


@NgModule({
  declarations: [
    IndicateurComponent
  ],
  imports: [
    CommonModule,
    IndicateurRoutingModule
  ]
})
export class IndicateurModule { }
