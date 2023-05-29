import { Injectable } from '@angular/core';
import { Chat } from "../interfaces/chat";
import { Observable, of } from "rxjs";
import { User } from '../interfaces/user';
import { CHATS } from '../mock/chats.mock';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  CHATS: Chat[] = CHATS;
  constructor() { }

  getChatById(id: number): Observable<Chat[]> {
    return of(this.CHATS.filter(chat => chat.id === id))
  }

  getChatByUserUser(user: User): Observable<Chat[]> {
    return of(this.CHATS.filter(chat => chat.participants.includes(user)))
  }

}
