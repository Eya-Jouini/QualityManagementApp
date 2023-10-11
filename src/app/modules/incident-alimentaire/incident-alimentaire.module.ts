import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncidentAlimentaireRoutingModule } from './incident-alimentaire-routing.module';
import { IncidentAlimentaireComponent } from './incident-alimentaire.component';


@NgModule({
  declarations: [
    IncidentAlimentaireComponent
  ],
  imports: [
    CommonModule,
    IncidentAlimentaireRoutingModule
  ]
})
export class IncidentAlimentaireModule { }
