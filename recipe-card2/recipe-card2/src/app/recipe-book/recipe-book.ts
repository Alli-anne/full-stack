import { Component, OnInit } from '@angular/core';
import { recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-book',
  standalone: false,
  templateUrl: './recipe-book.html',
  styleUrl: './recipe-book.css',
})
export class RecipeBook implements OnInit  {
  
  
  constructor() { }

  ngOnInit(): void {
  }
}

