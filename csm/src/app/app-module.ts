import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { Contacts } from './contacts/contacts';
import { ContactList } from './contacts/contact-list/contact-list';
import { ContactDetail } from './contacts/contact-detail/contact-detail';
import { Header } from './header/header';
import { ContactItem } from './contacts/contact-item/contact-item';
import { Documents } from './documents/documents';
import { DocumentList } from './documents/document-list/document-list';
import { DocumentItem } from './documents/document-item/document-item';
import { DocumentDetail } from './documents/document-detail/document-detail';
import { MessageList } from './messages/message-list/message-list';
import { MessageItem } from './messages/message-item/message-item';
import { MessageEdit } from './messages/message-edit/message-edit';
import { DropdownDirective } from './header/dropdown.directive';
import { ContactService } from './contacts/contact.service';

@NgModule({
  declarations: [
    App,
    Contacts,
    ContactList,
    ContactDetail,
    Header,
    ContactItem,
    Documents,
    DocumentList,
    DocumentItem,
    DocumentDetail,
    MessageList,
    MessageItem,
    MessageEdit,
  ],
  imports: [BrowserModule, DropdownDirective],
  providers: [provideBrowserGlobalErrorListeners(), ContactService],
  bootstrap: [App],
})
export class AppModule {}
