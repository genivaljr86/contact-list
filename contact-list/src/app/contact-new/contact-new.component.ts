import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-new',
  templateUrl: './contact-new.component.html',
  styleUrls: ['./contact-new.component.scss']
})
export class ContactNewComponent implements OnInit {

  contactForm: FormGroup
  id: number

  

  constructor(private router: Router, private route: ActivatedRoute, private _api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      'name': [null, Validators.required],
      'phone': [null,Validators.pattern('^[0-9]*$')],
      'email': [null, Validators.email],
      'whatsapp': [null,Validators.pattern('^[0-9]*$')]
    });
  }

  createContact(form) {
    // this.isLoadingResults = true;
    this._api.addContact(form)
      .subscribe(res => {
          // this.isLoadingResults = false;
          this.router.navigate(['/contact-details/' + res.id]);
        }, (err) => {
          console.log(err);
          // this.isLoadingResults = false;
        }
      );
  }

}
