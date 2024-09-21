import { Component } from '@angular/core';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrl: './shoppinglist.component.css'
})
export class ShoppinglistComponent {
   // Items array to store the list of shopping items
   items: string[] = [];
   newItem: string = '';

   // Method to add item to the list
   addItem() {
     if (this.newItem.trim()) {
       this.items.push(this.newItem.trim()); // Add the new item to the list
       this.newItem = ''; // Clear the input after adding the item
     }
   }

   // Method to remove item from the list
   removeItem(index: number) {
     this.items.splice(index, 1); // Remove the item at the given index
   }

}
