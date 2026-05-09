import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  selectedFeature = signal('documents');
  protected readonly title = signal('csm');

  switchView(selectedFeature: string) {
    this.selectedFeature.set(selectedFeature);
  }
}
