import { Component , OnInit  } from '@angular/core';
import { PersonalizedThemes } from '../models/personalized-theme';


@Component({
  selector: 'app-theme-personalization',
  templateUrl: './theme-personalization.component.html',
  styleUrls: ['./theme-personalization.component.scss']
})
export class ThemePersonalizationComponent implements OnInit{
theme1 !: string;//choisir option radio
theme2 !: PersonalizedThemes;//les couleurs personnalisées  ; si option radio==='personnaliser theme'


ngOnInit(): void {
    this.theme1="theme par defaut";
    this.theme2 = {};
  }

}
