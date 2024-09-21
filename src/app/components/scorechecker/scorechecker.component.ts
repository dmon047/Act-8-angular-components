import { Component } from '@angular/core';

@Component({
  selector: 'app-scorechecker',
  templateUrl: './scorechecker.component.html',
  styleUrl: './scorechecker.component.css'
})
export class ScorecheckerComponent {
  score: number | null = null;  // Holds the score input
  resultMessage: string = '';   // Holds the result message

  // Method to check the score
  checkScore() {
    if (this.score !== null) {
      if (this.score >= 50) {
        this.resultMessage = `Congrats! You passed with a score of ${this.score}.`;
      } else {
        this.resultMessage = `Sorry, you failed with a score of ${this.score}.`;
      }
    } else {
      this.resultMessage = 'Please enter a valid score.';
    }
  }
}
