import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeBook } from './recipe-book';

describe('RecipeBook', () => {
  let component: RecipeBook;
  let fixture: ComponentFixture<RecipeBook>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecipeBook],
    }).compileComponents();

    fixture = TestBed.createComponent(RecipeBook);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
