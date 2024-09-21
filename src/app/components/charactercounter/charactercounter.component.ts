import { Component } from '@angular/core';

@Component({
  selector: 'app-charactercounter',
  templateUrl: './charactercounter.component.html',
  styleUrl: './charactercounter.component.css'
})
export class CharactercounterComponent {
  inputString: string = '';
  characterCount: number | null = null;

  // Method to count the characters
  countCharacters() {
    if (this.inputString.trim()) {
      this.characterCount = this.inputString.length;
    } else {
      this.characterCount = 0; // If input is empty, set character count to 0
    }
  }

}
