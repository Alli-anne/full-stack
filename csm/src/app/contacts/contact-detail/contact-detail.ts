import { Component, OnInit } from '@angular/core';

import { Contact } from '../contact-model';
import { ContactService } from '../contact.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-detail',
  standalone: false,
  templateUrl: './contact-detail.html',
  styleUrl: './contact-detail.css',
})
export class ContactDetail implements OnInit {
constructor(private contactService: ContactService, private router: Router, private route: ActivatedRoute) {}
contact: Contact | null = null;

ngOnInit() {
  this.route.params.subscribe((params) => {
    const id = params['id'];
    this.contact = this.contactService.getContact(id);
  });
}
onDelete() {
  this.contactService.deleteContact(this.contact);
  this.router.navigateByUrl('/contacts');
}
}