import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { Header } from './header/header';
import { ShoppingList } from './shopping-list/shopping-list';
import { RecipeBook } from './recipe-book/recipe-book';
import { ShoppingListEdit } from './shopping-list/shopping-list-edit/shopping-list-edit';
import { Ingredients } from './shopping-list/ingredients/ingredients';
import { RecipeList } from './recipe-book/recipe-list/recipe-list';
import { RecipeItems } from './recipe-book/recipe-list/recipe-items/recipe-items';
import { RecipeDetails } from './recipe-book/recipe-details/recipe-details';
import { Recipe } from './recipe-book/recipe/recipe';

@NgModule({
  declarations: [
    App,
    Header,
    ShoppingList,
    RecipeBook,
    ShoppingListEdit,
    Ingredients,
    RecipeList,
    RecipeItems,
    RecipeDetails,
    Recipe,
  ],
  imports: [BrowserModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
