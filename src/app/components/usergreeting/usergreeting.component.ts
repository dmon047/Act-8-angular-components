import { Component } from '@angular/core';

@Component({
  selector: 'app-user greeting',
  templateUrl: './Usergreeting.component.html',
  styleUrl: './Usergreeting.component.css'
})
export class UsergreetingComponent {
  name: string = '';
  greetingMessage: string = '';

  generateGreeting() {
    if (this.name.trim()) {
      this.greetingMessage = `Hello, ${this.name}!`;
    } else {
      this.greetingMessage = 'Please enter your name.';
    }
  }

}
