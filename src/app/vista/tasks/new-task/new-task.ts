import { Component, EventEmitter, Output, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';
import { TasksService } from '../../../modelo/tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {
  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter<void>();
  enteredTitle = "";
  enteredSummary = "";
  enteredDate = "";

  private TasksService = inject(TasksService);
  // using signal
  // enteredTitle = signal("");
  // enteredSummary = signal("");
  // enteredDate = signal("");

  onClose(){
    this.close.emit();
  }

  onSubmit(){
    this.TasksService.addTask({title: this.enteredTitle, summary: this.enteredSummary, date: this.enteredDate}, this.userId);
    this.close.emit();
  }
}
