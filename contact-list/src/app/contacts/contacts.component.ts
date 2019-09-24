import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Contact } from 'src/model/contact';
import { NgxSpinnerService } from 'ngx-spinner';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contacts: Contact[];

  queryField: FormControl = new FormControl();


  constructor(private _api: ApiService, private spinner: NgxSpinnerService) { }

  ngOnInit() {

    this.searchContact();

    this.queryField.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe(query => this.searchContact(query))
  }

  searchContact(query: string = "") {
    this.spinner.show();
    this._api.getContacts(`q=${query}&_sort=name`)
      .subscribe(res => {
        this.contacts = res;
        this.spinner.hide();


      }, err => {
        console.log(err);
        this.spinner.hide();


      });
  }

}
