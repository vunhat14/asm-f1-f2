// src/app/contact.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'http://localhost:3000/api/contact';

  constructor(private http: HttpClient) {}

  addContact(contact: { name: string, email: string, message: string }): Observable<any> {
    return this.http.post(this.apiUrl, contact);
  }

  getContacts(): Observable<any> {
    return this.http.get('http://localhost:3000/api/contacts');
  }
}
