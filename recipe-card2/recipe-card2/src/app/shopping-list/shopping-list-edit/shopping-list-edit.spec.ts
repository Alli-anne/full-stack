import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListEdit } from './shopping-list-edit';

describe('ShoppingListEdit', () => {
  let component: ShoppingListEdit;
  let fixture: ComponentFixture<ShoppingListEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShoppingListEdit],
    }).compileComponents();

    fixture = TestBed.createComponent(ShoppingListEdit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
