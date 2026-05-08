import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  standalone: false,
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
})
export class RecipeList implements OnInit  {

  @Output() recipeSelected = new EventEmitter<recipe>();
  recipes: recipe[] = [
    new recipe('A Test Recipe', 'This is a simply a test', 'https://pixabay.com/photos/waffles-eggs-flour-whisk-2190961/'),
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: recipe) {
    this.recipeSelected.emit(recipe);
  }
}