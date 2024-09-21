import { Component } from '@angular/core';

@Component({
  selector: 'app-userage',
  templateUrl: './userage.component.html',
  styleUrl: './userage.component.css'
})
export class UserageComponent {
  birthYear: number | null = null;
  age: number | null = null;

  // Method to calculate age based on birth year
  calculateAge() {
    if (this.birthYear) {
      const currentYear = new Date().getFullYear();
      this.age = currentYear - this.birthYear;
    } else {
      this.age = null;
    }
  }

}
