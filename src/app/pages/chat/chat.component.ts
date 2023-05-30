import { Component } from '@angular/core';
import { Chat } from 'src/app/interfaces/chat';
import { USERS } from 'src/app/mock/users.mock';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  chats: any[] = [
    {
      name: 'Pepito',
      lastChat: 'Hola todo bien?'
    },
    {
      name: 'Juancito',
      lastChat: 'Holaaa???'
    },
    {
      name: 'Maria',
      lastChat: 'Que haces perdido? :)'
    },
    {
      name: 'Pepito',
      lastChat: 'Hola todo bien?'
    },
    {
      name: 'Juancito',
      lastChat: 'Holaaa???'
    },
    {
      name: 'Maria',
      lastChat: 'Que haces perdido? :)'
    },
    {
      name: 'Pepito',
      lastChat: 'Hola todo bien?'
    },
    {
      name: 'Juancito',
      lastChat: 'Holaaa???'
    },
    {
      name: 'Maria',
      lastChat: 'Que haces perdido? :)'
    },
  ] 

  chatSelected: Chat | null = null;


  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.chatService.getChatByUserUser(USERS[0])
      .subscribe({
        next: chats => this.chats = chats
      })
  }

  openChat(chat: Chat) {
    this.chatSelected = chat;
  }
}
