import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { Contacts } from './contacts/contacts';
import { ContactList } from './contacts/contact-list';
import { ContactDetail } from './contacts/contact-detail';
import { Header } from './header/header';

@NgModule({
  declarations: [App, Contants, Contacts, ContactList, ContactDetail, Header],
  imports: [BrowserModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
