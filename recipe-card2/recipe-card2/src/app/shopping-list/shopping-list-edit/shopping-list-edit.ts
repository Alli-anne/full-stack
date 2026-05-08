import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
 
@Component({
  selector: 'app-shopping-list-edit',
  standalone: false,
  templateUrl: './shopping-list-edit.html',
  styleUrl: './shopping-list-edit.css',
})
export class ShoppingListEdit {
  onAddItem(form: NgForm) {
    const value = form.value;
    console.log('Item added:', value);
    // TODO: Emit the ingredient to the parent component or add to service
    form.reset();
  }
}