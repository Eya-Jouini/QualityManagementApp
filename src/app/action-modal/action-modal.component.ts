import { Component , OnInit, Inject , ViewChild  } from '@angular/core';
import { Action } from '../models/action';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActionFormComponent } from '../action-form/action-form.component';


@Component({
  selector: 'app-action-modal',
  templateUrl: './action-modal.component.html',
  styleUrls: ['./action-modal.component.scss']
})
export class ActionModalComponent implements OnInit{
  action! : Action;//received actrion from actions en retard component
  button1!: string;//+ ou - ; for expanding the fist section
  button2!: string;
  button3!: string;
  button4!: string;
  expandSection1!:boolean;
  expandSection2!:boolean;
  expandSection3!:boolean;
  expandSection4!:boolean;
  @ViewChild(ActionFormComponent) actionFormComponent!: ActionFormComponent;//cause the submit form button is not in the action form component but in action modal component



  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Action,
    private dialogRef: MatDialogRef<ActionModalComponent>
  ) {}

  ngOnInit(): void {
      this.action=this.data;
      this.button1="-";
      this.button2="+"
      this.button3="+";
      this.button4="+";
      this.expandSection1=true;
      this.expandSection2=false;
      this.expandSection3=false;
      this.expandSection4=false;

  }

  closeModal(): void {
    this.dialogRef.close();
  }

expandSection(n:number){
  switch (n){
    case 1 :
      this.expandSection1=!this.expandSection1;
      if(this.button1==="+"){
        this.button1="-";
      }
      else this.button1="+";
      break;
    case 2 :
      this.expandSection2=!this.expandSection2;
      if(this.button2==="+"){
        this.button2="-";
      }
      else this.button2="+";
      break;
    case 3 :
      this.expandSection3=!this.expandSection3;
      if(this.button3==="+"){
        this.button3="-";
      }
      else this.button3="+";
      break;
    case 4 :
      this.expandSection4=!this.expandSection4;
      if(this.button4==="+"){
        this.button4="-";
      }
      else this.button4="+";
      break;

  }
}

submitForm(): void {
  if (this.actionFormComponent && this.actionFormComponent.actionForm.valid) {
      // Call the onSubmit method of the form component
      this.actionFormComponent.onSubmit();
  } else {
      console.log('Form is invalid or form component is not available.');
  }
}
}
