import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeItems } from './recipe-items';

describe('RecipeItems', () => {
  let component: RecipeItems;
  let fixture: ComponentFixture<RecipeItems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecipeItems],
    }).compileComponents();

    fixture = TestBed.createComponent(RecipeItems);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
