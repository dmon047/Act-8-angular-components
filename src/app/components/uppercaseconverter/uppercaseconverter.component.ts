import { Component } from '@angular/core';

@Component({
  selector: 'app-uppercaseconverter',
  templateUrl: './uppercaseconverter.component.html',
  styleUrl: './uppercaseconverter.component.css'
})
export class UppercaseconverterComponent {

  inputString: string = ''; // Holds the input string
  uppercaseString: string | null = null; // Holds the converted uppercase string

  // Method to convert the input string to uppercase
  convertToUppercase() {
    this.uppercaseString = this.inputString.toUpperCase();
  }
}
