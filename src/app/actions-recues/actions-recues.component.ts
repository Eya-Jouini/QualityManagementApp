import { Component , OnInit } from '@angular/core';
import { ActionsRecuesService } from '../actions-recues.service';
import { Action } from '../models/action';

@Component({
  selector: 'app-actions-recues',
  templateUrl: './actions-recues.component.html',
  styleUrls: ['./actions-recues.component.scss']
})
export class ActionsRecuesComponent implements OnInit {
  actionsRecues!:Action[];
  choixRadio! : string;
  showRadio !: boolean; 
  constructor (private monService: ActionsRecuesService ){}
  ngOnInit(): void{
    this.actionsRecues=this.monService.getActionsRecues();
    this.choixRadio="actions";
    this.showRadio=true;
  }

  toggleView() {
    this.choixRadio="actions";
  }


}
