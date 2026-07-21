import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskList } from './components/task-list/task-list';
import { StreakDisplay } from './components/streak-display/streak-display';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TaskList, StreakDisplay],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('client');
}
