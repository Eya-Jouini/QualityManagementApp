import { Component , OnInit} from '@angular/core';
import { ActionsEnRetardService } from '../actions-en-retard.service';
import { Action } from '../models/action';
import { MatDialog } from '@angular/material/dialog';
import { ActionModalComponent } from '../action-modal/action-modal.component';

@Component({
  selector: 'app-actions-en-retard',
  templateUrl: './actions-en-retard.component.html',
  styleUrls: ['./actions-en-retard.component.scss']
})
export class ActionsEnRetardComponent implements OnInit{
  actionsEnRetard!:Action[];
  constructor (private monService :ActionsEnRetardService , private dialog: MatDialog ){}
  ngOnInit(): void {
      this.actionsEnRetard=this.monService.getActionsEnRetard();
      //console.log(this.actionsEnRetard);
  }

  showActionModal( action : Action): void{
    const dialogRef = this.dialog.open(ActionModalComponent, {
      data: action // Pass the action data to the modal
    });
    console.log(action);
    console.log("is sent to the modal");
  }

}
