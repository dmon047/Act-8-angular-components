import { Component } from '@angular/core';

@Component({
  selector: 'app-auto clicker',
  templateUrl: './autoclicker.component.html',
  styleUrl: './autoclicker.component.css'
})
export class AutoclickerComponent {
  count: number = 0; // Counter variable
  intervalId: any; // Variable to store interval ID
  autoClickInterval: number = 1000; // Interval in milliseconds (e.g., 1000ms = 1s)
  isRunning: boolean = false; // Track if auto-clicker is running

  // Method to start the auto-clicker
  startAutoClicker() {
    if (!this.isRunning) {
      this.intervalId = setInterval(() => {
        this.count++;
      }, this.autoClickInterval);
      this.isRunning = true;
    }
  }

   stopAutoClicker() {
    if (this.isRunning) {
      clearInterval(this.intervalId);
      this.isRunning = false;
    }
  }

  ngOnDestroy() {
    this.stopAutoClicker();
  }

  ngOnInit(): void {
    // Optionally initialize component logic
  }

}
