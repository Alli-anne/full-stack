import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import { Contact } from '../contact-model';

@Component({
  selector: 'app-contact-item',
  standalone: false,
  templateUrl: './contact-item.html',
  styleUrl: './contact-item.css',
})
export class ContactItem implements OnInit {
  @Input() contact: Contact;
  @Output() contactSelected = new EventEmitter<Contact>();

  onSelected() {
  this.contactSelected.emit(this.contact);
}

  constructor() { }

  ngOnInit(): void { }

 


}
