import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientsModule } from '@angular/common/http';

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
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';

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
    DropdownDirective,
    HttpClientsModule
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    ShoppingListService
  ],
  bootstrap: [App]
})
export class AppModule {}
