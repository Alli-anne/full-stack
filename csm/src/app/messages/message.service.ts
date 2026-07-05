import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Message } from './message.model';
import { ContactService } from '../contacts/contact.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: Message[] = [];

  messageSelectedEvent = new Subject<Message>();
  messageChangedEvent = new Subject<Message[]>();

  constructor(
    private http: HttpClient,
    private contactService: ContactService
  ) {
    this.getMessages();
  }

  getMessages() {
    this.http
      .get<{ message: string; messages: Message[] }>('http://localhost:3000/messages')
      .subscribe((responseData) => {

        this.messages = responseData.messages;

        this.sortAndEmit();
      });
  }

  getMessage(id: string) {
    return this.messages.find(m => m.id === id);
  }

  addMessage(message: Message) {
    if (!message) return;

    message.id = '';
    const senderContact = this.contactService.getContact(message.sender);
    if (senderContact && senderContact._id) {
      message.sender = senderContact._id;
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.http
      .post<{ message: string; messageData: Message }>(
        'http://localhost:3000/messages',
        message,
        { headers }
      )
      .subscribe((responseData) => {

        // IMPORTANT: use backend returned object
        this.messages.push(responseData.messageData);

        this.sortAndEmit();
      });
  }

  updateMessage(originalMessage: Message, newMessage: Message) {
    if (!originalMessage || !newMessage) return;

    const pos = this.messages.findIndex(m => m.id === originalMessage.id);
    if (pos < 0) return;

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
      .subscribe(() => {

        this.messages[pos] = newMessage;

        this.sortAndEmit();
      });
  }

  deleteMessage(message: Message) {
    if (!message) return;

    const pos = this.messages.findIndex(m => m.id === message.id);
    if (pos < 0) return;

    this.http
      .delete('http://localhost:3000/messages/' + message.id)
      .subscribe(() => {

        this.messages.splice(pos, 1);

        this.sortAndEmit();
      });
  }

  private sortAndEmit() {
    this.messages.sort((a, b) => {
      if (a.subject < b.subject) return -1;
      if (a.subject > b.subject) return 1;
      return 0;
    });

    this.messageChangedEvent.next(this.messages.slice());
  }
}
