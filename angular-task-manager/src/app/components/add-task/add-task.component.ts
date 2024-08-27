import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../Task';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent {
  @Output() onAddTask = new EventEmitter<Task>();

  name!: string;
  day!: string;
  reminder: boolean = false;

  onSubmit() {

    if(!this.name) {
      alert('Please enter a task name');
      return;
    }

    const newTask: Task = {
      name: this.name,
      day: this.day,
      reminder: this.reminder,
    }

    this.onAddTask.emit(newTask);

    this.name = '';
    this.day = '';
    this.reminder = false;
  }
}
