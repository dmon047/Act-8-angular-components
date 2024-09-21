import { Component } from '@angular/core';

@Component({
  selector: 'app-wordcounter',
  templateUrl: './wordcounter.component.html',
  styleUrl: './wordcounter.component.css'
})
export class WordcounterComponent {
  inputString: string = ''; // Holds the input string from the user
  wordCount: number | null = null; // Holds the word count

  // Method to count words in the input string
  countWords() {
    if (this.inputString.trim()) {
      // Split the string by spaces and filter out empty entries
      this.wordCount = this.inputString.trim().split(/\s+/).length;
    } else {
      this.wordCount = 0; // Handle the case where inputString is empty or contains only spaces
    }
  }

}
