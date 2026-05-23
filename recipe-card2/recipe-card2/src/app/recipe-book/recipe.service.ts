import { EventEmitter } from "@angular/core";
import { recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";


export class RecipeService {
recipeSelected = new EventEmitter<recipe>();

 recipes: recipe[] = [
    new recipe('A Test Recipe', 'This is a simply a test', 'https://pixabay.com/photos/waffles-eggs-flour-whisk-2190961/', [ new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}