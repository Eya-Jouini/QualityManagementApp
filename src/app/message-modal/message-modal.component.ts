import { Component , Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { UserNameService } from '../user-name.service';
import { MessageServiceService } from '../message-service.service';

@Component({
  selector: 'app-message-modal',
  templateUrl: './message-modal.component.html',
  styleUrls: ['./message-modal.component.scss']
})
export class MessageModalComponent {
  placeholder!:string;
  message!:string;
  userName!:string;

  constructor( @Inject(MAT_DIALOG_DATA) public data: any ,monService : UserNameService ,private dialogRef: MatDialogRef<MessageModalComponent> , private messageService: MessageServiceService){
    this.placeholder="Exprimez-vous " + monService.prenom;
    this.userName=monService.prenom +" "+ monService.nom;
  }

  get messages() {
    return this.messageService.getMessages();
  }

  deleteMessage(index: number) {
    this.messageService.deleteMessage(index);
  }

  sendMessage(){
    this.messageService.addMessage(this.message);
  }
  
  closeModal(): void {
    this.dialogRef.close();
  }
}
 