

import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';
 
@Component({
  selector: 'app-recipe-book',
  standalone: false,
  templateUrl: './recipe-book.html',
  styleUrl: './recipe-book.css',
  providers: [RecipeService]
})
export class RecipeBook implements OnInit  {
  
  
  constructor() { }
 
  ngOnInit() {
  
  }
}
 