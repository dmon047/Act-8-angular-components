import { Component } from '@angular/core';

@Component({
  selector: 'app-oddsumcalculator',
  templateUrl: './oddsumcalculator.component.html',
  styleUrl: './oddsumcalculator.component.css'
})
export class OddsumcalculatorComponent {
  number: number | null = null; // Input number
  sumOfOdds: number | null = null; // Sum of odd numbers

  // Method to calculate the sum of odd numbers
  calculateSumOfOdds() {
    if (this.number !== null && this.number > 0) {
      let sum = 0;
      for (let i = 1; i <= this.number; i += 2) {
        sum += i;
      }
      this.sumOfOdds = sum;
    }
  }

}
