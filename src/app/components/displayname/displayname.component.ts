import { Component } from '@angular/core';

@Component({
  selector: 'app-displayname',
  templateUrl: './displayname.component.html',
  styleUrl: './displayname.component.css'
})
export class DisplaynameComponent {
  name: string = '';     // Holds the input name
  displayName: string = '';  // Holds the name to be displayed

  // Method to display the name
  showName() {
    this.displayName = this.name;
  }

}
