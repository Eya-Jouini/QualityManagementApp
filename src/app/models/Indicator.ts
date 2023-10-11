
import { Measure } from './measure';
import { MesureCamembert } from './mesure-camembert'

export interface Indicator {
  number:Number;
  name: string;
  measures?: Measure[];//mesures des indicateurs pour la premiere div
  isChecked?: boolean;//pour histogramme dans la premiere div
  mesuresCamembert?: MesureCamembert[];//mesures des indicateurs pour la 2eme div(camemberts)
}
