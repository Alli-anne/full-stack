import { Component, OnInit, Input} from '@angular/core';

import { Contact } from '../contact-model';

@Component({
  selector: 'app-contact-item',
  standalone: false,
  templateUrl: './contact-item.html',
  styleUrl: './contact-item.css',
})
export class ContactItem implements OnInit {
  @Input() contact: Contact;
  constructor() { }

  ngOnInit(): void { }

 


}
