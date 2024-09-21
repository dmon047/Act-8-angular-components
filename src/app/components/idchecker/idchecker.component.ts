import { Component } from '@angular/core';

@Component({
  selector: 'app-idchecker',
  templateUrl: './idchecker.component.html',
  styleUrl: './idchecker.component.css'
})
export class IdcheckerComponent {
  idInput: string = ''; // User input for ID
  isValid: boolean | null = null; // Track if the ID is valid

  // Method to check if the input ID is a valid number
  checkId() {
    const id = parseInt(this.idInput, 10);
    if (!isNaN(id) && id > 0) {
      this.isValid = true;
    } else {
      this.isValid = false;
    }
  }

}
