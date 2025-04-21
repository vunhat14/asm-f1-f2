import { Component } from '@angular/core';
import { ContactService } from '../../contact.service';  // Đảm bảo đường dẫn đúng

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private contactService: ContactService) {}

  submitContact() {
    const newContact = {
      name: this.name,
      email: this.email,
      message: this.message
    };

    this.contactService.addContact(newContact).subscribe(
      (response: any) => {
        this.successMessage = 'Contact submitted successfully!';
        this.name = '';
        this.email = '';
        this.message = '';
      },
      (error) => {
        this.errorMessage = 'There was an error submitting your contact information.';
      }
    );
  }
}
