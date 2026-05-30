import {Routes, RouterModule} from '@angular/router';

import { Contacts } from './contacts/contacts';
import { Documents } from './documents/documents';
import { MessageList } from './messages/message-list/message-list';
import { DocumentDetail } from './documents/document-detail/document-detail';
import { DocumentEdit } from './documents/document-edit/document-edit';
import { NgModule } from '@angular/core';
import {ContactEditComponent} from './contacts/contact-edit/contact-edit.component';
import {ContactDetailComponent} from './contacts/contact-detail/contact-detail.component';

const appRoutes: Routes = [
    { path: 'messages', component: MessageList },
    { path: '', redirectTo: '/documents', pathMatch: 'full' },
   {
  path: 'documents',
  component: Documents,
  children: [
    { path: 'new', component: DocumentEdit },
    { path: ':id', component: DocumentDetail },
    { path: ':id/edit', component: DocumentEdit }
  ]
},

{
  path: 'contacts',
  component: Contacts,
  children: [
    { path: 'new', component: ContactEditComponent },
    { path: ':id', component: ContactDetailComponent },
    { path: ':id/edit', component: ContactEditComponent }
  ]
}


   ];
@NgModule({
     imports: [ RouterModule.forRoot(appRoutes) ],
     exports: [ RouterModule ]
})
   export class AppRoutingModule { 


   }



