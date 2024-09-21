import { Component } from '@angular/core';

@Component({
  selector: 'app-simpleform',
  templateUrl: './simpleform.component.html',
  styleUrl: './simpleform.component.css'
})
export class SimpleformComponent {
  // Properties to hold form input values
  name: string = '';
  email: string = '';

  // Property to hold the submitted data
  submittedData: any = null;

  // Method to handle form submission
  onSubmit() {
    this.submittedData = {
      name: this.name,
      email: this.email
    };
  }

}
