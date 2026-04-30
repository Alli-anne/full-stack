import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  standalone: false,
  templateUrl: './shopping-list.html',
  styleUrl: './shopping-list.css',
})
export class ShoppingList implements OnInit  {
  recipes: any[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }
}
