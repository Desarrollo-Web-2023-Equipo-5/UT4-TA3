import { User } from "./user";

export interface Chat {
  id: number,
  messages: Message[],
  participants: User[]
}

export interface Message {
  id: number,
  content: string,
  sender: User,
  date: number
}
