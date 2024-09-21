import { Component } from '@angular/core';

@Component({
  selector: 'app-currencyconverter',
  templateUrl: './currencyconverter.component.html',
  styleUrl: './currencyconverter.component.css'
})
export class CurrencyconverterComponent {
   amountUSD: number | null = null;
  amountPHP: number | null = null;
  exchangeRate: number = 56; // 1 USD = 56 PHP

  // Method to convert USD to PHP
  convertToPHP() {
    if (this.amountUSD !== null) {
      this.amountPHP = this.amountUSD * this.exchangeRate;
    }
  }

}
