import { Component } from '@angular/core';

@Component({
  selector: 'app-guessnumbergame',
  templateUrl: './guessnumbergame.component.html',
  styleUrl: './guessnumbergame.component.css'
})
export class GuessnumbergameComponent {
  maxNumber: number = 100;
  targetNumber!: number; // Use non-null assertion operator
  userGuess: number | null = null;
  message: string | null = null;

  constructor() {
    this.resetGame();
  }

  // Method to check the user's guess
  checkGuess() {
    if (this.userGuess === this.targetNumber) {
      this.message = 'Congratulations! You guessed the number!';
    } else if (this.userGuess! < this.targetNumber) {
      this.message = 'Too low! Try again.';
    } else if (this.userGuess! > this.targetNumber) {
      this.message = 'Too high! Try again.';
    }
  }

  // Method to reset the game
  resetGame() {
    this.targetNumber = Math.floor(Math.random() * this.maxNumber) + 1; // Generate a random number between 1 and maxNumber
    this.userGuess = null;
    this.message = null;
  }

}
