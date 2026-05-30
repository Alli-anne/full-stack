import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WinRef {
  getNativeWindow() {
  return window;
}
}
