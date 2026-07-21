import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreakDisplay } from './streak-display';

describe('StreakDisplay', () => {
  let component: StreakDisplay;
  let fixture: ComponentFixture<StreakDisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StreakDisplay],
    }).compileComponents();

    fixture = TestBed.createComponent(StreakDisplay);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
