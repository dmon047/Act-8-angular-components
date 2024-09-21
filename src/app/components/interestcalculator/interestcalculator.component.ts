import { Component } from '@angular/core';

@Component({
  selector: 'app-interestcalculator',
  templateUrl: './interestcalculator.component.html',
  styleUrl: './interestcalculator.component.css'
})
export class InterestcalculatorComponent {
  principal: number | null = null; // Principal amount
  rate: number | null = null; // Rate of interest
  time: number | null = null; // Time in years
  interest: number | null = null; // Calculated simple interest

  // Method to calculate simple interest
  calculateInterest() {
    if (this.principal !== null && this.rate !== null && this.time !== null) {
      this.interest = (this.principal * this.rate * this.time) / 100;
    }
  }

}
