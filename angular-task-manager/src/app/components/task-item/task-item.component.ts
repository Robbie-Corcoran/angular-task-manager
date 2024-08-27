import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../Task';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FontAwesomeModule, NgStyle],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss'
})
export class TaskItemComponent {
  @Input() 
  task!: Task;
  
  @Output() 
  onDeleteTask: EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes;

  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }
}
