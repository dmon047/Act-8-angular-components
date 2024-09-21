import { Component } from '@angular/core';

@Component({
  selector: 'app-currencyformatter',
  templateUrl: './currencyformatter.component.html',
  styleUrl: './currencyformatter.component.css'
})
export class CurrencyformatterComponent {
  amount: number | null = null; // Input amount
  formattedDollar: string | null = null; // Formatted amount in Dollar
  formattedPhp: string | null = null; // Formatted amount in PHP
  formattedEuro: string | null = null; // Formatted amount in Euro

  // Conversion rates
  euroConversionRate = 0.92; // 1 USD = 0.92 EUR
  phpConversionRate = 56; // 1 USD = 56 PHP

  // Method to format the amount as different currencies
  formatCurrency() {
    if (this.amount !== null) {
      // Format as Dollar
      this.formattedDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(this.amount);

      // Format as PHP
      this.formattedPhp = new Intl.NumberFormat('en-PH', {
        style: 'currency',
        currency: 'PHP'
      }).format(this.amount * this.phpConversionRate);

      // Format as Euro
      this.formattedEuro = new Intl.NumberFormat('en-IE', {
        style: 'currency',
        currency: 'EUR'
      }).format(this.amount * this.euroConversionRate);
    }
  }
}
