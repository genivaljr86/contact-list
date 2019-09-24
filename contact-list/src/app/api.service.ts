
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Contact } from 'src/model/contact';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const apiUrl = 'http://localhost:3000/contacts';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  getContacts(params?): Observable<Contact[]> {
    const url = params ? `${apiUrl}/?${params}` : apiUrl;
    return this.http.get<Contact[]>(url);
  }

  getContact(id: number): Observable<Contact> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Contact>(url);
  }

  addContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(apiUrl, contact, httpOptions);
  }

  updateContact(id: number, contact: Contact): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, contact, httpOptions);
  }

  deleteContact(id: number): Observable<any> {
    const url = `${apiUrl}/${id}`;

    return this.http.delete<Contact>(url, httpOptions);
  }
}