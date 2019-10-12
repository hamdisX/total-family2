import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MessagesComponent } from './messages/messages.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  toUser : {toUserId: string, toUserName: string};
  editorMsg = '';
  showEmojiPicker = false;

constructor(public navCtrl: NavController, private router: Router) {
  this.toUser = {
    toUserId:'210000198410281948',
    toUserName:'Hancock'
  }
}

  ngOnInit() {
  }
  openChat() {
    this.router.navigate(['/chat/messages'],{queryParams: { user: JSON.stringify(this.toUser)}})

  }
}
