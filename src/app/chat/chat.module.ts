import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChatPage } from './chat.page';
import { MessagesComponent } from './messages/messages.component';
import { ChatService } from '../chat-service.service';
import { EmojiPickerComponent } from "./emoji-picker/emoji-picker.component";
import { EmojiProvider } from "../emoji";
const routes: Routes = [
  {
    path: '',
    component: ChatPage
  },
  {
    path: 'messages',
    component: MessagesComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChatPage, MessagesComponent,EmojiPickerComponent]
  ,
  providers: [
    ChatService,
    EmojiProvider
  ]
})
export class ChatPageModule {}
