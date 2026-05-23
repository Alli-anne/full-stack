import { Component, OnInit} from '@angular/core';
import { ContactService } from './contact.service';


import { Contact } from './contact-model';
@Component({
  selector: 'app-contacts',
  standalone: false,
  templateUrl: './contacts.html',
  styleUrl: './contacts.css',
})
export class Contacts implements OnInit {
  selectedContact: Contact | null = null;
  constructor(private contactService: ContactService) { 
  }
  ngOnInit() {
  this.contactService.contactSelectedEvent.subscribe((contact: Contact) => {
    this.selectedContact = contact;
  });
}

}
