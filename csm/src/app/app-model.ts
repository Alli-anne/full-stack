import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 
import { App } from './app';
import { Contacts } from './contacts/contacts';
import { ContactList } from './contacts/contact-list/contact-list';
import { ContactDetail } from './contacts/contact-detail/contact-detail';
import { Header } from './header/header';
 
@NgModule({
  declarations: [App, Contacts, ContactList, ContactDetail, Header],
  imports: [BrowserModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
