import { Component } from '@angular/core';
 
import { Message } from './message-model';
@Component({
  selector: 'app-message-list',
  standalone: false,
  templateUrl: './message-list.html',
  styleUrl: './message-list.css',
})
export class MessageList {
  messages: Message[] = [
    new Message(1, 'Hello Teacher', 'I need help', 'Allison Price'),
    new Message(2, 'Hello Student', 'Thanks', 'Isabelle French'),
    new Message(3, 'Hello Teacher', 'Thanks', 'Isabelle French'),
];
}
