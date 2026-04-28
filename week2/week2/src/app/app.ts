import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styles: [`
    h3{
      color:purple;
    }
  `]
})
export class App {
  protected readonly title = signal('week2');
}
