import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Contact } from '../contact-model';
import { ContactService } from '../contact.service';
@Component({
  selector: 'app-contact-list',
  standalone: false,
  templateUrl: './contact-list.html',
  styleUrl: './contact-list.css',
})
export class ContactList implements OnInit{
  @Output() selectedContactEvent = new EventEmitter<Contact>();

  constructor(private contactService: ContactService) { }
  contacts: Contact[] = [];

  
  onSelected(contacts: Contact) {
    this.contactService.contactSelectedEvent.emit(contacts);
    }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
  }

  

}
