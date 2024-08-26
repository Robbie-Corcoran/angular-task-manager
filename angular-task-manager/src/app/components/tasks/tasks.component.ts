import { Component } from '@angular/core';
import { TaskItemComponent } from '../task-item/task-item.component';
import { NgFor } from '@angular/common';
import { TaskService } from '../../sevices/task.service';
import { Task } from '../../Task';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskItemComponent, NgFor],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  constructor(private taskService: TaskService) {
  }
  
  tasks: Task[] = [];

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
  };
}
