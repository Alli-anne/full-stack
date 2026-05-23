

import { Component, OnInit } from '@angular/core';
import { recipe } from './recipe.model';
import { RecipeService } from './recipe.service';
 
@Component({
  selector: 'app-recipe-book',
  standalone: false,
  templateUrl: './recipe-book.html',
  styleUrl: './recipe-book.css',
  providers: [RecipeService]
})
export class RecipeBook implements OnInit  {
  
  selectedRecipe: recipe | undefined;
  
  constructor(private recipeService: RecipeService) { }
 
  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recipe: recipe) => {
        this.selectedRecipe = recipe;
      }
    );
  }
}
 