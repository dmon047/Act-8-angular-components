import { Component } from '@angular/core';

@Component({
  selector: 'app-randomnumbergenerator',
  templateUrl: './randomnumbergenerator.component.html',
  styleUrl: './randomnumbergenerator.component.css'
})
export class RandomnumbergeneratorComponent {
  minRange: number = 0; // Minimum range value
  maxRange: number = 100; // Maximum range value
  randomNumber: number | null = null; // Holds the generated random number

  // Method to generate a random number within the specified range
  generateRandomNumber() {
    if (this.minRange < this.maxRange) {
      this.randomNumber = Math.floor(Math.random() * (this.maxRange - this.minRange + 1)) + this.minRange;
    } else {
      this.randomNumber = null; // Handle invalid range
    }
  }

}
