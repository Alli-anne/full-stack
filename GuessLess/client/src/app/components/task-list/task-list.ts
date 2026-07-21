import { Component, signal } from '@angular/core';
import { Task } from '../../services/task';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Streak } from '../../services/streak';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  tasks = signal<any[]>([]);
  newTitle = '';
  newEstimate = 0;

constructor(private taskService: Task, private streakService: Streak) {
      this.refresh();
  }

  refresh() {
    this.taskService.getTasks().subscribe((data: any) => {
      this.tasks.set(data);
    });
  }

  addTask() {
    this.taskService.createTask({ title: this.newTitle, estimate_time: this.newEstimate }).subscribe(() => {
      this.newTitle = '';
      this.newEstimate = 0;
      this.refresh();
    });
  }

  completeTask(task: any) {
  const actual = prompt('How many minutes did it actually take?');
  this.taskService.updateTask(task._id, { real_time: Number(actual) }).subscribe(() => {
    this.refresh();
    this.streakService.refresh();
  });
}

  deleteTask(id: any) {
    this.taskService.deleteTask(id).subscribe(() => {
      this.refresh();
    });
  }
}