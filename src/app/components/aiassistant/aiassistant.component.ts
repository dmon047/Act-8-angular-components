import { Component } from '@angular/core';

@Component({
  selector: 'app-aiassistant',
  templateUrl: './aiassistant.component.html',
  styleUrl: './aiassistant.component.css'
})
export class AiassistantComponent {
  userInput: string = ''; // User input for the AI assistant
  response: string = ''; // AI assistant's response

  // Method to handle user input and generate a response
  getResponse() {
    // Simple example response logic
    if (this.userInput.trim().length > 0) {
      this.response = `You said: ${this.userInput}`;
    } else {
      this.response = 'Please enter a message.';
    }
  }

}
