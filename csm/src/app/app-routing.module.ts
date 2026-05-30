import {Routes, RouterModule} from '@angular/router';

import { Contacts } from './contacts/contacts';
import { Documents } from './documents/documents';
import { MessageList } from './messages/message-list/message-list';
import { DocumentDetail } from './documents/document-detail/document-detail';
import { DocumentEdit } from './documents/document-edit/document-edit';
import { NgModule } from '@angular/core';
import { ContactEdit } from './contacts/contact-edit/contact-edit';
import { ContactDetail } from './contacts/contact-detail/contact-detail';

const appRoutes: Routes = [
    { path: 'messages', component: MessageList },
    { path: '', redirectTo: '/documents', pathMatch: 'full' },
   {
  path: 'documents',
  component: Documents,
  children: [
    { path: 'new', component: DocumentEdit },
    { path: ':id/edit', component: DocumentEdit },
    { path: ':id', component: DocumentDetail },
    
  ]
},

{
  path: 'contacts',
  component: Contacts,
  children: [
    { path: 'new', component: ContactEdit },
    { path: ':id/edit', component: ContactEdit },
    { path: ':id', component: ContactDetail },
    
  ]
}


   ];
@NgModule({
     imports: [ RouterModule.forRoot(appRoutes) ],
     exports: [ RouterModule ]
})
   export class AppRoutingModule { 


   }



