import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Task } from './task.model';
import { OutletContext } from '@angular/router';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  @Output() complete = new EventEmitter<string>();

  onCompleteTask () {
    this.complete.emit(this.task.id);
  }
}
