


import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
 
@Component({
  selector: 'app-shopping-list-edit',
  standalone: false,
  templateUrl: './shopping-list-edit.html',
  styleUrl: './shopping-list-edit.css',
})
export class ShoppingListEdit implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
 
  constructor( private shoppingListService: ShoppingListService) {}
 
  ngOnInit() {}
 
  onAddItem(form: NgForm) {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.shoppingListService.addIngredient(newIngredient);
    
  }
}