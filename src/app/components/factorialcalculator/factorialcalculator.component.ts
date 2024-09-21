import { Component } from '@angular/core';

@Component({
  selector: 'app-factorialcalculator',
  templateUrl: './factorialcalculator.component.html',
  styleUrl: './factorialcalculator.component.css'
})
export class FactorialcalculatorComponent {
  number: number | null = null; // Holds the user's input number
  factorialResult: number | null = null; // Holds the calculated factorial result

  // Method to calculate the factorial of a number
  calculateFactorial() {
    if (this.number !== null && this.number >= 0) {
      this.factorialResult = this.factorial(this.number);
    }
  }

  // Helper method to compute factorial recursively
  factorial(n: number): number {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * this.factorial(n - 1);
  }

}
