import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Message } from './message.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: Message[] = [];

  messageSelectedEvent = new EventEmitter<Message>();
  messageChangedEvent = new EventEmitter<Message[]>();

  constructor(private http: HttpClient) {
    this.getMessages();
  }

  getMessages() {
    this.http
      .get<{ message: string; messages: Message[] }>('http://localhost:3000/messages')
      .subscribe(
        (responseData) => {
          this.messages = responseData.messages;

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

  addMessage(newMessage: Message) {
    if (!newMessage) {
      return;
    }

    newMessage.id = '';

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.http
      .post<{ message: string; messageData: Message }>(
        'http://localhost:3000/messages',
        newMessage,
        { headers }
      )
      .subscribe(
        (responseData) => {
          this.messages.push(responseData.messageData);
          this.messageChangedEvent.emit(this.messages.slice());
        },
        (error: any) => {
          console.log(error);
        }
      );
  }

  updateMessage(originalMessage: Message, newMessage: Message) {
    if (!originalMessage || !newMessage) {
      return;
    }

    const pos = this.messages.findIndex(
      m => m.id === originalMessage.id
    );

    if (pos < 0) {
      return;
    }

    newMessage.id = originalMessage.id;
    newMessage._id = originalMessage._id;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.http
      .put(
        'http://localhost:3000/messages/' + originalMessage.id,
        newMessage,
        { headers }
      )
      .subscribe(
        () => {
          this.messages[pos] = newMessage;
          this.messageChangedEvent.emit(this.messages.slice());
        },
        (error: any) => {
          console.log(error);
        }
      );
  }

  deleteMessage(message: Message) {
    if (!message) {
      return;
    }

    const pos = this.messages.findIndex(
      m => m.id === message.id
    );

    if (pos < 0) {
      return;
    }

    this.http
      .delete('http://localhost:3000/messages/' + message.id)
      .subscribe(
        () => {
          this.messages.splice(pos, 1);
          this.messageChangedEvent.emit(this.messages.slice());
        },
        (error: any) => {
          console.log(error);
        }
      );
  }
}