import { Component } from '@angular/core';
import { Contact } from '../contact-module';
@Component({
  selector: 'app-contact-list',
  standalone: false,
  templateUrl: './contact-list.html',
  styleUrl: './contact-list.css',
})
export class ContactList {
  contacts: Contacts[] = [
    new Contacts (1, 'R. Kent Jackson', 'jacksonk@byui.edu', '208-496-3771',  "./assets/images/jacksonk.jpg", null),
    new Contacts (2, 'Rex Barzee', 'barzeer@byui.edu', '208-496-3768', "./assets/images/barzeer.jpg", null)

    
  ]
}
