import { Injectable } from '@angular/core';
import { Chat } from "../interfaces/chat";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  CHATS: Chat[] = [
    {
      id: 1,
      messages: [
        {
          id: 1,
          content: "Hi, how are you?",
          sender: {
            name: "Name1",
            surname: "Surname1",
            username: "@User1",
            profilePhoto: "",
            location: "Location1"
          },
          date: 123456789012347
        }
      ],
      participants: [
        {
          name: "Name1",
          surname: "Surname1",
          username: "@User1",
          profilePhoto: "",
          location: "Location1"
        }
      ]

    },
    {
      id: 2,
      messages: [
        {
          id: 1,
          content: "Wanna play some league?",
          sender: {
            name: "Name1",
            surname: "Surname1",
            username: "@User1",
            profilePhoto: "",
            location: "Location1"
          },
          date: 123456789012345
        },
        {
          id: 2,
          content: "Sure",
          sender: {
            name: "Name2",
            surname: "Surname2",
            username: "@User2",
            profilePhoto: "",
            location: "Location2"
          },
          date: 123456789012346
        }
      ],
      participants: [
        {
          name: "Name1",
          surname: "Surname1",
          username: "@User1",
          profilePhoto: "",
          location: "Location1"
        },
        {
          name: "Name2",
          surname: "Surname2",
          username: "@User2",
          profilePhoto: "",
          location: "Location2"
        }
      ]
    }
  ]
  constructor() { }

  getChatById(id: number): Observable<Chat[]> {
    return of(this.CHATS.filter(chat => chat.id === id))
  }



}
