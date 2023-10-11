import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FournisseursRoutingModule } from './fournisseurs-routing.module';
import { FournisseursComponent } from './fournisseurs.component';


@NgModule({
  declarations: [
    FournisseursComponent
  ],
  imports: [
    CommonModule,
    FournisseursRoutingModule
  ]
})
export class FournisseursModule { }
