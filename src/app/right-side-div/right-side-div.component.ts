import { Component , OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MessageModalComponent } from '../message-modal/message-modal.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-right-side-div',
  templateUrl: './right-side-div.component.html',
  styleUrls: ['./right-side-div.component.scss']
})
export class RightSideDivComponent implements OnInit {
  isChatVisible = false;
  isThemeVisible = false;
  constructor( private dialog : MatDialog , private router: Router) {}

  ngOnInit() {}

  openMessageModal() {

    this.dialog.open(MessageModalComponent);
  
}

openChat(){
  this.isChatVisible = !this.isChatVisible;
}

navigateToHome() {
  this.router.navigateByUrl('/');
}

showThemePersonalization(){ 
  this.isThemeVisible = ! this.isThemeVisible;
}
}


