import { Component } from '@angular/core';

@Component({
  selector: 'app-todomanager',
  templateUrl: './todomanager.component.html',
  styleUrl: './todomanager.component.css'
})
export class TodomanagerComponent {
  tasks: string[] = []; // Array to store the list of tasks
  newTask: string = ''; // Holds the value of the new task input

  // Method to add a new task to the list
  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push(this.newTask.trim()); // Add the new task to the list
      this.newTask = ''; // Clear the input after adding the task
    }
  }

  // Method to remove a task from the list
  removeTask(index: number) {
    this.tasks.splice(index, 1); // Remove the task at the specified index
  }

}
