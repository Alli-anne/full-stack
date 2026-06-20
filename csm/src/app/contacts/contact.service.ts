import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Contact } from './contact-model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MOCKCONTACTS } from './MOCKCONTACTS';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contacts: Contact[] = [];
  contactSelectedEvent = new Subject<Contact>();
  contactListChangedEvent = new Subject<Contact[]>();
  maxContactId: number;

  constructor(private http: HttpClient) {
    this.contacts = MOCKCONTACTS;
    this.maxContactId = this.getMaxId();
  }

    getContacts() {
      this.http.get<Contact[]>(
          'https://csm-wdd430-default-rtdb.firebaseio.com/contacts.json'
        ).subscribe(
          (contacts: Contact[]) => {
            console.log('got contacts from server:', contacts);

            this.contacts = contacts || [];
      
            this.maxContactId = this.getMaxId();
      
            this.contacts.sort((a: Contact, b: Contact) => {
              if (a.name < b.name) {
                return -1;
              } else if (a.name > b.name) {
                return 1;
              } else {
                return 0;
              }
            });
      
            this.contactListChangedEvent.next(this.contacts.slice());
          },
          (error: any) => {
            console.error(error);
          }
        );
    }
    getContact(id: string) {
      return this.contacts.find(contact => contact.id === id);
  }
  deleteContact(contact: Contact) {
   if (!contact) {
      return;
   }
   const pos = this.contacts.indexOf(contact);
   if (pos < 0) {
      return;
   }
   this.contacts.splice(pos, 1);
   this.storeContacts();
}

getMaxId() {
  let maxId = 0;
  for (const contact of this.contacts) {
    const currentId = parseInt(contact.id, 10);
    if (currentId > maxId) {
      maxId = currentId;
    }
  }
  return maxId;


  
}
addContact(contact: Contact) {
  if (!contact) {
    return;
  }
  this.maxContactId++;
  contact.id = this.maxContactId.toString();
  this.contacts.push(contact);
  this.storeContacts();
}

updateContact(originalContact: Contact, newContact: Contact) {
  if (!originalContact || !newContact) {
    return;
  }
  const pos = this.contacts.indexOf(originalContact);
  if (pos < 0) {
    return;
  }
  newContact.id = originalContact.id;
  this.contacts[pos] = newContact;
this.storeContacts();
}
storeContacts(){
const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  const contactList = JSON.stringify(this.contacts);

  this.http.put(
    'https://csm-wdd430-default-rtdb.firebaseio.com/contacts.json',
    contactList,
    { headers: headers }
  ).subscribe(
    () => {
      this.contactListChangedEvent.next(this.contacts.slice());
    },
  (error:any) => {
    console.log(error);
  }
)

}


}
