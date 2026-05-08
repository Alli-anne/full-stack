import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  @Output() selectedFeature = new EventEmitter<string>();
  onSelect(feature: string) {
    this.selectedFeature.emit(feature);
  }
}
