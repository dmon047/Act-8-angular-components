import { Component } from '@angular/core';

@Component({
  selector: 'app-locationfinder',
  templateUrl: './locationfinder.component.html',
  styleUrl: './locationfinder.component.css'
})
export class LocationfinderComponent {
  locationInput: string = ''; // User input for location
  location: string = ''; // Location to display

  // Method to handle location input and display it
  findLocation() {
    if (this.locationInput.trim().length > 0) {
      this.location = `Location: ${this.locationInput}`;
    } else {
      this.location = 'Please enter a location.';
    }
  }
}
