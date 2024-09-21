import { Component } from '@angular/core';

@Component({
  selector: 'app-divisiblechecker',
  templateUrl: './divisiblechecker.component.html',
  styleUrl: './divisiblechecker.component.css'
})
export class DivisiblecheckerComponent {
  number1: number | null = null; // First number
  number2: number | null = null; // Second number
  result: string | null = null;  // Result of the divisibility check

  // Method to check if number1 is divisible by number2
  checkDivisibility() {
    if (this.number1 !== null && this.number2 !== null) {
      if (this.number2 === 0) {
        this.result = 'Division by zero is not allowed.';
      } else if (this.number1 % this.number2 === 0) {
        this.result = `${this.number1} is divisible by ${this.number2}.`;
      } else {
        this.result = `${this.number1} is not divisible by ${this.number2}.`;
      }
    }
  }
}
