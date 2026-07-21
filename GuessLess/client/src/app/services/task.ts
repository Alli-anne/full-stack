import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Task {
  private apiUrl = 'http://localhost:3001/tasks';

  constructor(private http: HttpClient) { }

  getTasks() {
    return this.http.get(this.apiUrl);
  }

  createTask(task: any) {
    return this.http.post(this.apiUrl, task);
  }

  updateTask(id:any, task: any) {
    return this.http.put(`${this.apiUrl}/${id}`, task);  }
  deleteTask(id:any) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  

}
