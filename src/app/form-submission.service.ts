import { Injectable } from '@angular/core';
import { FormSubmissionData } from './models/form-submission-data';

@Injectable({
  providedIn: 'root'
})
export class FormSubmissionService {
formData !:FormSubmissionData;
  constructor() { }

  setFormData(formData : FormSubmissionData) :void{
    this.formData=formData;
    console.log("FormSubmissionData Service :form info set correctly");
    console.log(formData);
  }
  
}
