import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactNewComponent } from './contact-new/contact-new.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ContactDetailsComponent,
    ContactNewComponent,
    ContactEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
