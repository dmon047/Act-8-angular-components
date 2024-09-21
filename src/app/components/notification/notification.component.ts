import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent {
  notifications: string[] = []; // Array to hold the list of notifications
  newNotification: string = ''; // Property to bind the input field

  // Method to add a new notification
  addNotification() {
    if (this.newNotification.trim()) {
      this.notifications.push(this.newNotification);
      this.newNotification = ''; // Clear the input field after adding
    }
  }

  // Method to clear all notifications
  clearNotifications() {
    this.notifications = [];
  }

}
