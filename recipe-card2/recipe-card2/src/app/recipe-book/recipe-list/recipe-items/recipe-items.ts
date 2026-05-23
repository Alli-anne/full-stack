import { Component, OnInit, Input} from '@angular/core';

import { recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-items',
  standalone: false,
  templateUrl: './recipe-items.html',
  styleUrl: './recipe-items.css',
})
export class RecipeItems implements OnInit {
  @Input() recipe: recipe; 
 

  constructor(private recipeService: RecipeService) { }

  ngOnInit() { }

  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}