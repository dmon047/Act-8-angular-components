import { Component } from '@angular/core';

@Component({
  selector: 'app-uppercasegreeting',
  templateUrl: './uppercasegreeting.component.html',
  styleUrl: './uppercasegreeting.component.css'
})
export class UppercasegreetingComponent {
  name: string = ''; // User's input name
  uppercaseName: string | null = null; // Name converted to uppercase

  // Method to convert name to uppercase
  convertToUppercase() {
    this.uppercaseName = this.name.toUpperCase();
  }

}
