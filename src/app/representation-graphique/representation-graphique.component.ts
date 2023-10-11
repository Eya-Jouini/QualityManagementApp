import { Component, OnInit } from '@angular/core';
import { MesuresIndicateursService } from '../mesures-indicateurs.service';
import { Indicator } from '../models/Indicator';
import { Measure } from '../models/measure';
import Chart from 'chart.js/auto';
import { FileUploadComponent } from '../file-upload/file-upload.component';




@Component({
  selector: 'app-representation-graphique',
  templateUrl: './representation-graphique.component.html',
  styleUrls: ['./representation-graphique.component.scss']
})
export class RepresentationGraphiqueComponent  implements OnInit{
  //Indicateurs div
  tableIndicateurs: Indicator[] = [];
  showtable = true;
  selectedIndicator: Indicator | null = null;
  public chart: any;
  chartDates: string[] = [];
  chartValues: number[] = [];
  choixRadio! : string;

  constructor(private monService: MesuresIndicateursService) {}

  ngOnInit(): void {
    this.tableIndicateurs = this.monService.getIndicatorsMeasures();
    this.tableIndicateurs.forEach((indicateur: Indicator) => {
      indicateur.isChecked = false;
    });
    this.choixRadio="indicateurs";
    //this.showtable=true;
  }

  onSelectIndicator(indicator: Indicator): void {
    this.selectedIndicator = indicator;
    if (this.selectedIndicator.measures){
      this.extractData(this.selectedIndicator.measures);}
    this.showtable = false;
    this.createChart();
    
  }

  toggleView() {
    this.showtable = true;
    this.choixRadio="indicateurs";
    if (!this.showtable) {
      this.selectedIndicator = null;
    }

    if (this.chart) {
      this.chart.destroy();
    }

  }


  extractData(measures: Measure[]): void {
    this.chartDates = measures.map((measure: Measure) => measure.date);
    this.chartValues =measures.map((measure: Measure) => measure.value);
  }
  
  

  createChart() {
    if (!this.selectedIndicator) {
      return;
    }

    if (this.chart) {
      this.chart.destroy();
    }
  
      if(!this.selectedIndicator.isChecked){
      this.chart = new Chart("MyChart", {
        type: 'line',
        data: {
          labels: this.chartDates, // Array of date strings
          datasets: [
            {
              label: this.selectedIndicator.name,
              data: this.chartValues, // Array of values corresponding to the dates
              borderColor: 'rgb(75, 192, 192)',
              fill: false
            }
          ]
        },
        options: {
          plugins: {
            legend: {
              display: true,
              position: 'top', // Position of the legend (top, bottom, left, right)
            }
          }
        }
        
      });}

      else{

        this.chart = new Chart("MyChart", {
          type: 'bar',
          data: {
            labels: this.chartDates, // Array of date strings
            datasets: [
              {
                label: this.selectedIndicator.name,
                data: this.chartValues, // Array of values corresponding to the dates
                //borderColor: 'rgb(75, 192, 192)',
                borderWidth: 2,
                backgroundColor:'#1CA7EC',
              }
            ]
          },
          options: {
            plugins: {
              legend: {
                display: true,
                position: 'top',

              }
            }
            
          }
          
        });

      }
    
  }



}
