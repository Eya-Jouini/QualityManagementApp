import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AMDECRoutingModule } from './amdec-routing.module';
import { AMDECComponent } from './amdec.component';


@NgModule({
  declarations: [
    AMDECComponent
  ],
  imports: [
    CommonModule,
    AMDECRoutingModule
  ]
})
export class AMDECModule { }
