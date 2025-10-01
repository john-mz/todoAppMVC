import { Component, inject, Input } from '@angular/core';

import { TaskInterface } from './task.model';
import { Card } from '../../shared/card/card';
import { DatePipe } from '@angular/common';
import { TasksService } from '../../../modelo/tasks.service';


@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {
  @Input({required: true}) task!: TaskInterface; 
  private TasksService = inject(TasksService);

  onCompleteTask(){
    this.TasksService.removeTask(this.task.id);
  }
  
}
