import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Message } from './message.model';
import { MOCKMESSAGES } from './MOCKMESSAGES';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: Message[] = [];
  messageSelectedEvent = new EventEmitter<Message>();
  messageChangedEvent = new EventEmitter<Message[]>();
  maxMessageId: number;

  constructor(private http: HttpClient) {
    this.messages = MOCKMESSAGES;
    this.maxMessageId = this.getMaxId();
  }

  getMessages() {
    this.http.get<Message[]>(
      'https://csm-wdd430-default-rtdb.firebaseio.com/messages.json'
    ).subscribe(
      (messages: Message[]) => {
        this.messages = messages;

        this.maxMessageId = this.getMaxId();

        this.messageChangedEvent.emit(this.messages.slice());
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  getMessage(id: string) {
    return this.messages.find(message => message.id === id);
  }

  getMaxId() {
    let maxId = 0;

    for (const message of this.messages) {
      const currentId = parseInt(message.id, 10);

      if (currentId > maxId) {
        maxId = currentId;
      }
    }

    return maxId;
  }

  addMessage(newMessage: Message) {
    if (!newMessage) {
      return;
    }

    this.maxMessageId++;
    newMessage.id = this.maxMessageId.toString();

    this.messages.push(newMessage);

    this.storeMessages();
  }

  storeMessages() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const messageList = JSON.stringify(this.messages);

    this.http.put(
      'https://csm-wdd430-default-rtdb.firebaseio.com/messages.json',
      messageList,
      { headers: headers }
    ).subscribe(
      () => {
        this.messageChangedEvent.emit(this.messages.slice());
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}