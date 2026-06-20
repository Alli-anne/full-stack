import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from './contact-model';


@Pipe({
  name: 'contactsFilter',
  standalone: false,
})
export class ContactsFilterPipe implements PipeTransform {
  transform(contacts: Contact[], term: string): Contact[] {
    let filteredContacts: Contact[] = [];

    for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].name.toLowerCase().includes(term.toLowerCase())) {
        filteredContacts.push(contacts[i]);
      }
    }

    if (filteredContacts.length === 0) {
      return contacts;
    }

    return filteredContacts;
  }
}
