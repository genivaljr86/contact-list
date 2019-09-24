import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {

  contactForm: FormGroup
  id: number

  constructor(private router: Router, private route: ActivatedRoute, private _api: ApiService, private formBuilder: FormBuilder, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();

    this.contactForm = this.formBuilder.group({
      'name': [null, Validators.required],
      'phone': [null,Validators.pattern('^[0-9]*$')],
      'email': [null, Validators.email],
      'whatsapp': [null,Validators.pattern('^[0-9]*$')]
    });

    this._api.getContact(this.route.snapshot.params['id'])
      .subscribe(res => {
        this.id = res.id

        this.contactForm.setValue({
          'name': res.name,
          'phone': res.phone,
          'email': res.email,
          'whatsapp': res.whatsapp

        })

        this.spinner.hide();


      }, err => {
        console.log(err);
        this.spinner.hide();
        
      })


  }

  updateContact(form) {
    
    this.spinner.show();

    this._api.updateContact(this.id, form)
      .subscribe(res => {
        
        this.spinner.hide();

        this.router.navigate(['/contact-details/' + this.id]);

      }, (err) => {

        console.log(err);

        this.spinner.hide();

      }
      );
  }

}
