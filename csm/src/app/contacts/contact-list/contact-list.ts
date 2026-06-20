import { Component, OnInit, OnDestroy } from '@angular/core';
import { Contact } from '../contact-model';
import { Subscription } from 'rxjs';
import { ContactService } from '../contact.service';
@Component({
  selector: 'app-contact-list',
  standalone: false,
  templateUrl: './contact-list.html',
  styleUrl: './contact-list.css',
})
export class ContactList implements OnInit, OnDestroy {

  constructor(private contactService: ContactService) { }
  contacts: Contact[] = [];
  term: string = '';
  subscription: Subscription;

  

ngOnInit() {
  this.subscription = this.contactService.contactListChangedEvent.subscribe(
    (contacts: Contact[]) => {
      this.contacts = contacts;
    }
  );
}

ngOnDestroy() {
  if (this.subscription) {
    this.subscription.unsubscribe();
  }
}

search(value: string){
  this.term = value;
}
}



