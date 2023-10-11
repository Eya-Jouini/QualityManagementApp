import { Injectable } from '@angular/core';
import { Message } from './message-modal/Message';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {

  private messages!: Message[];

  constructor() {
    // Retrieve messages from localStorage on service initialization
    const storedMessages = localStorage.getItem('messages');
    this.messages = storedMessages ? JSON.parse(storedMessages) : [];
    
    }

  addMessage(content: string) {
    const message = new Message(content, new Date());
    this.messages.push(message);
    this.updateLocalStorage();
  }

  getMessages() {
    return this.messages.slice(); // Return a copy of the messages
  }

  deleteMessage(index: number) {
    this.messages.splice(index, 1);
    this.updateLocalStorage(); 
  }

  private updateLocalStorage() {
    localStorage.setItem('messages', JSON.stringify(this.messages));
  }

}
