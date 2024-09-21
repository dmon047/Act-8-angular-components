import { Component } from '@angular/core';

@Component({
  selector: 'app-wordshuffler',
  templateUrl: './wordshuffler.component.html',
  styleUrl: './wordshuffler.component.css'
})
export class WordshufflerComponent {
  inputWord: string = ''; // Holds the input word
  shuffledWord: string | null = null; // Holds the shuffled word

  // Method to shuffle the letters of the input word
  shuffleLetters() {
    if (this.inputWord) {
      this.shuffledWord = this.shuffle(this.inputWord);
    }
  }

  // Helper method to shuffle the letters of a word
  private shuffle(word: string): string {
    let array = word.split('');
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array.join('');
  }

}
