import { Component } from '@angular/core';

@Component({
  selector: 'app-simplelogin',
  templateUrl: './simplelogin.component.html',
  styleUrl: './simplelogin.component.css'
})
export class SimpleloginComponent {
  email: string = '';
  password: string = '';
  submitted: boolean = false;

  // Method to handle form submission
  onSubmit() {
    this.submitted = true;
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    // Add any further logic for login authentication here
  }

}
