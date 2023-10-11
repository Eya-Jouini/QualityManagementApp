import { Component , OnInit , Input , Injectable} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Action } from '../models/action';
import { FormSubmissionService } from '../form-submission.service';
import { FormSubmissionData } from '../models/form-submission-data';



@Component({
  selector: 'app-action-form',
  templateUrl: './action-form.component.html',
  styleUrls: ['./action-form.component.scss']
})
export class ActionFormComponent implements OnInit{
actionForm!: FormGroup;
@Input() action! : Action;
formData! :FormSubmissionData;

constructor(private formBuilder :FormBuilder , private monService: FormSubmissionService){}

ngOnInit() : void{
this.actionForm=this.formBuilder.group({
  sousAction: [ { value: this.action.description, disabled: true }],
  taux: [this.action.taux !== undefined ? this.action.taux * 100 : null],
  cout: [null],
  dateDebutRealisation: [null ,Validators.required],
  dateSaisieRealisation: [{  value: this.getCurrentDate() , disabled: true }],
  dateFinRealisation: [null , Validators. required ],
  numFicheProjet: [null],
  commentaire: [null, Validators. required]});
  } 

  getCurrentDate(): string {
    const currentDate = new Date();
    return currentDate.toISOString().substring(0, 10); // Format as 'YYYY-MM-DD'
  }


  onSubmit(){
    this.formData={
      sousAction: this.actionForm.get('sousAction')!.value,
      taux: this.actionForm.get('taux')!.value,
      cout: this.actionForm.get('cout')!.value,
      dateDebutRealisation: this.actionForm.get('dateDebutRealisation')!.value,
      dateSaisieRealisation: this.actionForm.get('dateSaisieRealisation')!.value,
      dateFinRealisation: this.actionForm.get('dateFinRealisation')!.value,
      numFicheProjet: this.actionForm.get('numFicheProjet')!.value,
      commentaire: this.actionForm.get('commentaire')!.value
    }

    this.monService.setFormData(this.formData);
    
    console.log("on submit is called from action form component");
  }
}
