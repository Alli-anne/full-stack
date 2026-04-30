import { Component, OnInit } from '@angular/core';
import { recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  standalone: false,
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
})
export class recipeList implements OnInit  {
  recipes: recipe[] = [
    new recipe('A Test Recipe', 'This is a simply a test', 'https://pixabay.com/photos/waffles-eggs-flour-whisk-2190961/'),
  ];
  
  constructor() { }

  ngOnInit(): void {
  }
}
