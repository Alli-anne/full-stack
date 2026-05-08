import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

import { recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-items',
  standalone: false,
  templateUrl: './recipe-items.html',
  styleUrl: './recipe-items.css',
})
export class RecipeItems implements OnInit {
  @Input() recipe: recipe; 
  @Output()recipeSelected = new EventEmitter<void>();
 

  constructor() { }

  ngOnInit() { }

  onSelected() {
    this.recipeSelected.emit();
  }
}
