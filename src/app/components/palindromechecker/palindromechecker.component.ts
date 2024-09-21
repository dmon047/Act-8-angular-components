import { Component } from '@angular/core';

@Component({
  selector: 'app-palindromechecker',
  templateUrl: './palindromechecker.component.html',
  styleUrl: './palindromechecker.component.css'
})
export class PalindromecheckerComponent {
  inputWord: string = '';
  isPalindrome: boolean | null = null;

  // Method to check if the word is a palindrome
  checkPalindrome() {
    const cleanedWord = this.inputWord.toLowerCase().replace(/[^a-z0-9]/g, ''); // remove spaces and non-alphanumeric characters
    const reversedWord = cleanedWord.split('').reverse().join('');
    this.isPalindrome = cleanedWord === reversedWord;
  }

}
