import { Component } from '@angular/core';
import { TaskItemComponent } from '../task-item/task-item.component';
import { AddTaskComponent } from '../add-task/add-task.component';
import { NgFor } from '@angular/common';
import { TaskService } from '../../services/task.service';
import { Task } from '../../Task';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskItemComponent, AddTaskComponent, NgFor],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  constructor(private taskService: TaskService) {
  }
  
  tasks: Task[] = [];

  ngOnInit(): void {
    this.taskService
      .getTasks()
      .subscribe(
        (tasks) => (this.tasks = tasks));
  };

  deleteTask(task: Task) {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => this.tasks = this.tasks.filter((t) => t.id !== task.id)
      );
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task) {
    this.taskService
     .addTask(task)
     .subscribe((newTask) => this.tasks.push(newTask));
  };
}
