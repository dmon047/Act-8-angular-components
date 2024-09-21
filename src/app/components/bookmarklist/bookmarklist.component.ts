import { Component } from '@angular/core';

@Component({
  selector: 'app-bookmarklist',
  templateUrl: './bookmarklist.component.html',
  styleUrl: './bookmarklist.component.css'
})
export class BookmarklistComponent {
  urlInput: string = '';
  urlList: string[] = [];

  // Method to add the URL to the list
  addUrl() {
    if (this.urlInput.trim()) {
      // Ensure the URL starts with http or https
      if (!this.urlInput.startsWith('http://') && !this.urlInput.startsWith('https://')) {
        this.urlInput = 'https://' + this.urlInput;
      }
      this.urlList.push(this.urlInput);
      this.urlInput = ''; // Clear the input field after adding
    }
  }

}
