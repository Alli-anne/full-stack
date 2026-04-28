import { Component, signal } from '@angular/core';
import { ServerComponent } from './server.component';
import { Servers } from './servers/servers';

@Component({
  selector: 'app-root',
  imports: [ServerComponent, Servers],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-bootstrap-app');
}
