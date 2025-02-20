import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TasksService } from '../tasks.service';
import { TasksComponent } from '../tasks.component';

@Component({
  selector: 'app-new-task',
  standalone:false,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {

  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter();
  enteredTitle = "";
  enteredSummary = "";
  enteredDate = "";

  private tasksService = inject(TasksService)
  private tasksComponent = inject(TasksComponent)

  onCancel () {
    this.close.emit();
  }
  onSubmit () {
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    }, this.userId);
    this.tasksComponent.oncloseAddTask();

  }
}
