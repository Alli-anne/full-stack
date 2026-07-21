import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Streak {
  private apiUrl = 'http://localhost:3001/streak';
  streakData = signal<any>(null);

  constructor(private http: HttpClient) {
    this.refresh();
  }

  refresh() {
    this.http.get(this.apiUrl).subscribe((data: any) => {
      this.streakData.set(data);
    });
  }
}