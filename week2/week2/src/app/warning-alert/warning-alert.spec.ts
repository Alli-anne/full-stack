import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningAlert } from './warning-alert';

describe('WarningAlert', () => {
  let component: WarningAlert;
  let fixture: ComponentFixture<WarningAlert>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WarningAlert],
    }).compileComponents();

    fixture = TestBed.createComponent(WarningAlert);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
