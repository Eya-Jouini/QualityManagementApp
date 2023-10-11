import { Component, Input, OnInit , EventEmitter , Output } from '@angular/core';
import { Indicator } from '../models/Indicator';
import { MesuresIndicateursService } from '../mesures-indicateurs.service';
import { MatDialog } from '@angular/material/dialog';
import { IndicatorsModalComponent } from '../indicators-modal/indicators-modal.component';


@Component({
  selector: 'app-indicator-card',
  templateUrl: './indicator-card.component.html',
  styleUrls: ['./indicator-card.component.scss']
})
export class IndicatorCardComponent implements OnInit {
  moyenne!: number;
  @Input() indicator!: Indicator;
  @Input() cardNumber!: number;
  @Output() cardButtonClick: EventEmitter<any> = new EventEmitter();

  constructor(public monService: MesuresIndicateursService, private dialog: MatDialog) {}

  ngOnInit() {
    this.moyenne = this.monService.calculerMoyenne(this.indicator);
  }

  
  showIndicatorsModal(): void {
    this.dialog.open(IndicatorsModalComponent, {
      data: { number: this.indicator.number,
      name : this.indicator.name } // Pass the indicator object here
    });

        //emitting the event to the parent component:indocator card list
        this.cardButtonClick.emit(this.cardNumber);
  }
}