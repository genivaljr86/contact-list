import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/model/contact';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  contact: Contact = {
    id: null,
    name: "",
    phone: null,
    email: "",
    whatsapp: null,
  }

  constructor(private _api: ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this._api.getContact(this.route.snapshot.params['id'])
      .subscribe(res=>{
        this.contact = res
      }, err => {
        console.log(err);
  
        // this.isLoadingResults = false;
      })
  }

  removeContact(id:number){
    this._api.deleteContact(id)
      .subscribe(res =>{
        this.router.navigate(['/contacts']);
      })
  }

}
