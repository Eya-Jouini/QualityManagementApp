import { Component, OnInit , EventEmitter , Output , Inject} from '@angular/core';
import { MesuresIndicateursService } from '../mesures-indicateurs.service';
import { Indicator } from '../models/Indicator';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IntermediaireModalIndicatorCardlistService } from '../intermediaire-modal-indicatorcardlist.service';

@Component({
  selector: 'app-indicators-modal',
  templateUrl: './indicators-modal.component.html',
  styleUrls: ['./indicators-modal.component.scss']
})
export class IndicatorsModalComponent implements OnInit {
  indicatorsTable:Indicator[] = [];
  @Output() indicatorClick: EventEmitter<any> = new EventEmitter();
  constructor( private monService:MesuresIndicateursService ,
    private indicatorEventService: IntermediaireModalIndicatorCardlistService, @Inject(MAT_DIALOG_DATA) public data: any ,private dialogRef: MatDialogRef<IndicatorsModalComponent>){
    console.log(data.number);
    console.log(data.name);
  }

  ngOnInit(): void {
    
    this.indicatorsTable=this.monService.getIndicatorsMeasures();

  }

  modifyIndicatorCard(clickedIndicator: Indicator) {
    this.indicatorEventService.emitIndicatorClicked(clickedIndicator);
  }

  closeModal(): void {
    this.dialogRef.close();
  }
}


