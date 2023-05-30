import { Chat } from "../interfaces/chat";
import { USERS } from "./users.mock";

export const CHATS: Chat[] = [
    {
      id: 1,
      messages: [
        {
          id: 1,
          content: "Hi, how are you?",
          sender: USERS[0],
          date: 123456789012347
        }
      ],
      participants: [
        USERS[0],
        USERS[2]
      ]

    },
    {
      id: 2,
      messages: [
        {
          id: 1,
          content: "Wanna play some league?",
          sender: USERS[0],
          date: 123456789012345
        },
        {
          id: 2,
          content: "Sure",
          sender: USERS[1],
          date: 123456789012346
        }
      ],
      participants: [
        USERS[0],
        USERS[1]
      ]
    },
    {
      id: 3,
      messages: [
        {
          id: 1,
          content: "Hello Jenny!",
          sender: USERS[0],
          date: 123456789012345
        },
        {
          id: 2,
          content: "Are you there?",
          sender: USERS[0],
          date: 123456789012346
        },
        {
          id: 3,
          content: "Hello there Jane :)",
          sender: USERS[3],
          date: 123456789012346
        },
        {
          id: 4,
          content: ":O",
          sender: USERS[0],
          date: 123456789012346
        },
        {
          id: 5,
          content: "I'm happy to see you are around",
          sender: USERS[0],
          date: 123456789012346
        },
        {
          id: 6,
          content: "I have something interesting to tell you",
          sender: USERS[0],
          date: 123456789012346
        },
        {
          id: 7,
          content: "Go ahead!",
          sender: USERS[3],
          date: 123456789012346
        },
        {
          id: 8,
          content: "It's been a while since we last talked, i've been on and off UCUgram and never saw you around. Where have you been perdida?",
          sender: USERS[3],
          date: 123456789012346
        },
        {
          id: 9,
          content: "Do you want to be your own boss?",
          sender: USERS[0],
          date: 123456789012346
        },
        {
          id: 10,
          content: "I'm blocking you srry",
          sender: USERS[3],
          date: 123456789012346
        },
      ],
      participants: [
        USERS[0],
        USERS[3]
      ]
    }
  ]
  