import { Component , OnInit , OnDestroy} from '@angular/core';
import { MesuresIndicateursService } from '../mesures-indicateurs.service';
import { Indicator } from '../models/Indicator';
import { IntermediaireModalIndicatorCardlistService } from '../intermediaire-modal-indicatorcardlist.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-indicator-card-list',
  templateUrl: './indicator-card-list.component.html',
  styleUrls: ['./indicator-card-list.component.scss']
})
export class IndicatorCardListComponent implements OnInit , OnDestroy {
  randIndicatorTable: Indicator[] = [];
  clickedCardNumber!:number;
  private eventSubscription!: Subscription;
  constructor( private monService:MesuresIndicateursService ,
    private indicatorEventService: IntermediaireModalIndicatorCardlistService){
  }

  ngOnInit() {
    const indicatorTable = this.monService.getIndicatorsMeasures();
    const len = indicatorTable.length;
    const selectedIndices: number[] = [];

    while (this.randIndicatorTable.length < 4) {
      const randIndex = Math.floor(Math.random() * len);
      if (!selectedIndices.includes(randIndex)) {
        selectedIndices.push(randIndex);
        this.randIndicatorTable.push(indicatorTable[randIndex]);
      }
  }

      // Subscribe to the emitted indicator
      this.eventSubscription = this.indicatorEventService.indicatorClicked$.subscribe(
        (clickedIndicator) => {
          // Modify the indicator card with the clicked indicator
          this.randIndicatorTable[this.clickedCardNumber - 1] = clickedIndicator;
          console.log('Clicked indicator is:', clickedIndicator);
          console.log('Modified indicator is:', this.randIndicatorTable[this.clickedCardNumber - 1]);
        }
      );
    }
  

  onCardButtonClick(eventData: any) {
    this.clickedCardNumber = eventData;
    console.log('Index of Clicked Card:', this.clickedCardNumber);
    
    // You can update the parent component's data or take any other action based on the event and index
  }


  ngOnDestroy() {
    this.eventSubscription.unsubscribe();
  }
}
