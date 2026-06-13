import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact-model';
import { ContactService } from '../contact.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-edit',
  standalone: false,
  templateUrl: './contact-edit.html',
  styleUrl: './contact-edit.css',
})
export class ContactEdit implements OnInit {

  originalContact: Contact;
  contact: Contact;
  editMode = false;

  // needed by your template
  groupContacts: Contact[] = [];

  constructor(
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        const id = params['id'];

        if (!id) {
          this.editMode = false;
          return;
        }

        this.editMode = true;
        this.originalContact = this.contactService.getContact(id);

        if (!this.originalContact) {
          return;
        }

        this.contact = JSON.parse(
          JSON.stringify(this.originalContact)
        );
      }
    );
  }

  onSubmit(form: NgForm) {
    const value = form.value;

    const newContact = new Contact(
      this.originalContact?.id,
      value.name,
      value.email,
      value.phone,
      value.imageUrl,
      []
    );

    if (this.editMode) {
      this.contactService.updateContact(
        this.originalContact,
        newContact
      );
    } else {
      this.contactService.addContact(newContact);
    }

    this.router.navigate(['/contacts']);
  }

  onCancel() {
    this.router.navigate(['/contacts']);
  }
}