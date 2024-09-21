import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplicationchecker',
  templateUrl: './multiplicationchecker.component.html',
  styleUrl: './multiplicationchecker.component.css'
})
export class MultiplicationcheckerComponent {
  number: number | null = null; // Number to check
  divisor: number | null = null; // Divisor to check against
  isMultiple: boolean | null = null; // Result of the check
  resultMessage: string = ''; // Message to display result

  // Method to check if the number is a multiple of the divisor
  checkMultiple() {
    if (this.number !== null && this.divisor !== null) {
      if (this.divisor === 0) {
        this.resultMessage = 'Divisor cannot be zero.';
        this.isMultiple = null; // Reset result
      } else {
        this.isMultiple = this.number % this.divisor === 0;
        this.resultMessage = this.isMultiple
          ? `${this.number} is a multiple of ${this.divisor}.`
          : `${this.number} is not a multiple of ${this.divisor}.`;
      }
    }
  }

}
