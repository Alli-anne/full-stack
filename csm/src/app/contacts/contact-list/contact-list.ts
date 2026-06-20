import { ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';
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

  constructor(
    private contactService: ContactService,
    private changeDetectorRef: ChangeDetectorRef
  ) { }
  contacts: Contact[] = [];
  term: string = '';
  subscription: Subscription;

ngOnInit() {
  this.subscription = this.contactService.contactListChangedEvent.subscribe(
    (contacts: Contact[]) => {
      console.log('contact-list received:', contacts);
      this.contacts = contacts;
      this.changeDetectorRef.detectChanges();
    }
  );

  this.contactService.getContacts();
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
