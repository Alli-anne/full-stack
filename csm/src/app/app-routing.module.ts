import {Routes, RouterModule} from '@angular/router';

import { Contacts } from './contacts/contacts';
import { Documents } from './documents/documents';
import { Message } from './messages/message.model';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
    { path: 'contacts', component: Contacts },
    { path: 'documents', component: Documents },
    { path: 'messages', component: Message },
    { path: '', redirectTo: '/documents', pathMatch: 'full' }
   ];
@NgModule({
     imports: [ RouterModule.forRoot(appRoutes) ],
     exports: [ RouterModule ]
})
   export class AppRoutingModule { 


   }



