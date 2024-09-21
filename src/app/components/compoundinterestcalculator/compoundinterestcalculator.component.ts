import { Component } from '@angular/core';

@Component({
  selector: 'app-compoundinterestcalculator',
  templateUrl: './compoundinterestcalculator.component.html',
  styleUrl: './compoundinterestcalculator.component.css'
})
export class CompoundinterestcalculatorComponent {
  principal: number | null = null; // Principal amount
  rate: number | null = null; // Annual interest rate (in percentage)
  time: number | null = null; // Time in years
  frequency: number | null = null; // Number of times interest is compounded per year
  compoundInterest: number | null = null; // Calculated compound interest

  // Method to calculate compound interest
  calculateCompoundInterest() {
    if (this.principal !== null && this.rate !== null && this.time !== null && this.frequency !== null) {
      const P = this.principal;
      const r = this.rate / 100;
      const t = this.time;
      const n = this.frequency;
      this.compoundInterest = P * Math.pow((1 + r / n), n * t) - P;
    }
  }

}
