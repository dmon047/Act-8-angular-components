import { Component } from '@angular/core';

@Component({
  selector: 'app-showdate',
  templateUrl: './showdate.component.html',
  styleUrl: './showdate.component.css'
})
export class ShowdateComponent {
  currentDateTime: string | null = null;

  // Method to get the current date and time
  showDateTime() {
    const now = new Date();
    this.currentDateTime = now.toLocaleString(); // Formats the date and time according to locale
  }

}
