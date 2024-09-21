import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  count: number = 0; // Initialize the counter

  // Method to increase the counter by 1
  increaseCounter() {
    this.count += 1;
  }
}
