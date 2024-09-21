import { Component } from '@angular/core';

@Component({
  selector: 'app-showhellobutton',
  templateUrl: './showhellobutton.component.html',
  styleUrl: './showhellobutton.component.css'
})
export class ShowhellobuttonComponent {
  message: string = '';  // This will hold the message to display

  // Method to set the message
  showMessage() {
    this.message = 'Hello World';

  }

}
