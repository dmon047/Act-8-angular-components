import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplicationtable',
  templateUrl: './multiplicationtable.component.html',
  styleUrl: './multiplicationtable.component.css'
})
export class MultiplicationtableComponent {
  number: number | null = null;
  table: number[] = [];

  // Method to generate multiplication table
  generateTable() {
    if (this.number !== null) {
      this.table = Array.from({ length: 10 }, (_, i) => (i + 1) * this.number!); // Using non-null assertion operator
    } else {
      this.table = []; // Clear table if input is invalid
    }
  }

}
