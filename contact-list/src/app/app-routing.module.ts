import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactNewComponent } from './contact-new/contact-new.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';

const routes: Routes = [
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: 'contact-details/:id',
    component: ContactDetailsComponent
  },
  {
    path: 'contact-new',
    component: ContactNewComponent
  },
  {
    path: 'contact-edit/:id',
    component: ContactEditComponent
  },
  { path: '',
    redirectTo: '/contacts',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
