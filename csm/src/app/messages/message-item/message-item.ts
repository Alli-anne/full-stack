import { Component, Input, OnInit } from '@angular/core';

import { Message } from '../message.model';
import { ContactService } from '../../contacts/contact.service';
import { Contact } from '../../contacts/contact-model';

@Component({
  selector: 'app-message-item',
  standalone: false,
  templateUrl: './message-item.html',
  styleUrl: './message-item.css',
})
export class MessageItem implements OnInit {
  @Input() message: Message;
  messageSender: string;

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    const contact: Contact = this.contactService.contacts.find(
      currentContact =>
        currentContact.id === this.message.sender ||
        currentContact._id === this.message.sender
    );
    this.messageSender = contact ? contact.name : 'Unknown Sender';
  }
}
