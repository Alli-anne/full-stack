import { Component, OnInit } from '@angular/core';
import { Ingredients } from './ingredients/ingredients';

@Component({
  selector: 'app-shopping-list',
  standalone: false,
  templateUrl: './shopping-list.html',
  styleUrl: './shopping-list.css',
})
export class ShoppingList implements OnInit  {
  ingredients : Ingredients[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];
    
  constructor() { }

  ngOnInit(): void {
  }
}
