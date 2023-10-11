import { Component, OnInit ,  } from '@angular/core';
import { MesuresIndicateursCamembertService } from '../mesures-indicateurs-camembert.service';
import { Indicator } from '../models/Indicator';
import Chart from 'chart.js/auto';
import { MatDialog } from '@angular/material/dialog';
import { IndicatorsDoughnutModalComponent } from '../indicators-doughnut-modal/indicators-doughnut-modal.component';
@Component({
  selector: 'app-representation-camembert',
  templateUrl: './representation-camembert.component.html',
  styleUrls: ['./representation-camembert.component.scss']
})
export class RepresentationCamembertComponent implements OnInit{
  tableIndicateurs: Indicator[] = [];
  public chart: any;
  selectedIndicator : Indicator | null = null;
  randIndex! :number;
  backgroundColors!: string[];
  chartLabels!: string[];
  chartValues!: number[];
  tooltipLabel: string | undefined;//custom tooltip 
  tooltipValue: number | undefined;//custom tooltip

  constructor(private monService: MesuresIndicateursCamembertService ,private dialog: MatDialog ) {}

  ngOnInit(): void {
    
    this.tableIndicateurs = this.monService.getIndicatorsMeasures();
    this.randIndex = Math.floor(Math.random() * this.tableIndicateurs.length);
    this.selectedIndicator=this.tableIndicateurs[this.randIndex];
    this.backgroundColors= [
      '#1CA7EC',
      '#FFA630',
      '#0474BA',
      '#F17720',
      '#00529B',
      "#FFD190",
      '#FDBB2F',
      '#F47A1F',
      '#B595CE',
      "#00ffff",
      
    ];
    this.createChart();

  }

createChart() {


  if (!this.selectedIndicator) {
    return;
  }
    
  if (this.chart) {
    this.chart.destroy();
  }
  this.tooltipLabel=undefined;
  this.tooltipValue=undefined;

  if (this.selectedIndicator.mesuresCamembert) {
    console.log("called createChart");
    const mesuresCamembert = this.selectedIndicator.mesuresCamembert;

    this.chartLabels = mesuresCamembert
    .filter(mesure => mesure.nom !== undefined)
    .map(mesure => mesure.nom!);
    
    this.chartValues = mesuresCamembert
    .filter(mesure => mesure.valeur !== undefined)
    .map(mesure => mesure.valeur!);


    this.chart = new Chart("myChart", {
      type: 'doughnut',
      data: {
        labels: this.chartLabels,
        datasets: [{
          data: this.chartValues,
          backgroundColor: this.backgroundColors,
          hoverOffset: 4,
        }],
      },
      options: {
        aspectRatio: 1,
        cutout: '40%',
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {//customizing the hover effect on the doughnut chart
            enabled: true,
            callbacks: {
              label: (context: any) => {
                const dataIndex = context.dataIndex;
                this.tooltipLabel = this.chartLabels[dataIndex];
                this.tooltipValue = this.chartValues[dataIndex];
                console.log(this.tooltipLabel);
                console.log(this.tooltipValue);
               // return ''; // Return an empty string to prevent default tooltip display               
                console.log(this.tooltipLabel);
                console.log(this.tooltipValue);

              }
            }
          }
        }
      }
    });
  
  }
}



openModal(): void {
  const dialogRef = this.dialog.open(IndicatorsDoughnutModalComponent);

  dialogRef.afterClosed().subscribe((result) => {//result is data coming from the modal
    if (result) {
      this.selectedIndicator = result; 
      this.createChart();
    }
  });
}

}
