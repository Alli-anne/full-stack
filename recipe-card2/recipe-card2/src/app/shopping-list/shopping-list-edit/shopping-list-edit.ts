import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
 
@Component({
  selector: 'app-shopping-list-edit',
  standalone: false,
  templateUrl: './shopping-list-edit.html',
  styleUrl: './shopping-list-edit.css',
})
export class ShoppingListEdit implements OnInit {
  @ViewChild ('nameInput') nameInputRef: ElementRef;
  @ViewChild ('amountInput') amountInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();


  constructor() {}

  ngOnInit() {}


  onAddItem(form: NgForm) {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.ingredientAdded.emit(newIngredient);
  }
}