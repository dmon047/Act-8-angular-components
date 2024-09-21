import { Component } from '@angular/core';

@Component({
  selector: 'app-usernamevalidator',
  templateUrl: './usernamevalidator.component.html',
  styleUrl: './usernamevalidator.component.css'
})
export class UsernamevalidatorComponent {
  username: string = ''; // User's input username
  validationMessage: string | null = null; // Validation result message

  // Predefined validation rules
  private minLength: number = 6; // Minimum length of the username
  private maxLength: number = 20; // Maximum length of the username
  private regex: RegExp = /^[a-zA-Z0-9_]*$/; // Allowed characters: letters, numbers, and underscores

  // Method to validate the username
  validateUsername() {
    if (!this.username) {
      this.validationMessage = 'Username is required.';
    } else if (this.username.length < this.minLength) {
      this.validationMessage = `Username must be at least ${this.minLength} characters long.`;
    } else if (this.username.length > this.maxLength) {
      this.validationMessage = `Username cannot exceed ${this.maxLength} characters.`;
    } else if (!this.regex.test(this.username)) {
      this.validationMessage = 'Username can only contain letters, numbers, and underscores.';
    } else {
      this.validationMessage = 'Username is valid!';
    }
  }

}
