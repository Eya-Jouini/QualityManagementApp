import { Component , OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient , HttpHeaders} from '@angular/common/http';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit{
queryFormGroup!: FormGroup;
messages=[
  {
    role :"system",
    content:"You are a helpful assistant."
  }
];
result :any;
constructor( private fb : FormBuilder , private httpClient : HttpClient){

}

ngOnInit(){
  this.queryFormGroup=this.fb.group({
    query : this.fb.control("")
  });
}

handleAskGPT() {
  let url = "https://api.openai.com/v1/chat/completions";
  let httpHeaders = new HttpHeaders().set("Authorization", "Bearer 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");

  // Reset the messages array and add the user's message
  this.messages = [
    {
      role: "system",
      content: "You are a helpful assistant."
    },
    {
      role: "user",
      content: this.queryFormGroup.value.query
    }
  ];

  let payload = {
    model: "gpt-3.5-turbo",
    messages: this.messages
  };



   // Introduce a delay before making the request
  setTimeout(() => {
    this.httpClient.post(url, payload, { headers: httpHeaders }).subscribe({
      next: (resp) => {
        this.result = resp;
        this.result.choices.forEach((choice: any) => {
          this.messages.push({
            role: "assistant",
            content: choice.message.content
          });
        });
      },
      error: (err) => {
        // Handle error
      }
    });
  }, 2000); // Adjust the delay as needed
}


}
