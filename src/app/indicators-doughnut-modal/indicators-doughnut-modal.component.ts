import { Component , OnInit ,Inject} from '@angular/core';
import { MesuresIndicateursCamembertService } from '../mesures-indicateurs-camembert.service';
import { Indicator } from '../models/Indicator';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-indicators-doughnut-modal',
  templateUrl: './indicators-doughnut-modal.component.html',
  styleUrls: ['./indicators-doughnut-modal.component.scss']
})
export class IndicatorsDoughnutModalComponent implements OnInit{
indicatorsTable:Indicator[] = [];
constructor(private monService : MesuresIndicateursCamembertService , @Inject(MAT_DIALOG_DATA) public data: any ,private dialogRef: MatDialogRef<IndicatorsDoughnutModalComponent> ){}

ngOnInit(): void {
    this.indicatorsTable=this.monService.getIndicatorsMeasures();
} 

modifyDoughnutChart(selectedIndicator : Indicator){//passing the selected indicato to parent component : representation camembert component
    this.dialogRef.close(selectedIndicator); 
}

closeModal(): void {
  this.dialogRef.close();
}

}
