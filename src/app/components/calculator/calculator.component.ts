import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  num1: number | null = null;
  num2: number | null = null;
  result: number | null = null;

  // Method to perform addition
  add() {
    if (this.num1 !== null && this.num2 !== null) {
      this.result = this.num1 + this.num2;
    }
  }

  // Method to perform subtraction
  subtract() {
    if (this.num1 !== null && this.num2 !== null) {
      this.result = this.num1 - this.num2;
    }
  }

  // Method to perform multiplication
  multiply() {
    if (this.num1 !== null && this.num2 !== null) {
      this.result = this.num1 * this.num2;
    }
  }

  // Method to perform division
  divide() {
    if (this.num1 !== null && this.num2 !== null) {
      if (this.num2 !== 0) {
        this.result = this.num1 / this.num2;
      } else {
        this.result = null; // Handle division by zero
        alert('Cannot divide by zero');
      }
    }
  }

}
