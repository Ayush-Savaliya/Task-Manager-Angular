import { Component, Input } from '@angular/core';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone:false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  @Input({ required: true }) name !: string;
  @Input({ required: true }) userId !: string;
  isAddingTask = false;
  
  constructor(private taskService: TasksService) {}

  get selectedUserTask () {
    return this.taskService.getUserTasks(this.userId);
  }

  onStartAddTask () {
    this.isAddingTask = true;
  }

  oncloseAddTask () {
    this.isAddingTask = false;
  }
}
