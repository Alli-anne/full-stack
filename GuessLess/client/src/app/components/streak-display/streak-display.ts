import { Component } from '@angular/core';
import { Streak } from '../../services/streak';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-streak-display',
  imports: [CommonModule],
  templateUrl: './streak-display.html',
  styleUrl: './streak-display.css',
})
export class StreakDisplay {
  constructor(public streakService: Streak) {}
}