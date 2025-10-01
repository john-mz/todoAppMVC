import { Component, inject, Input } from '@angular/core';

import { TaskInterface } from './task.model';
import { Card } from '../../shared/card/card';
import { DatePipe } from '@angular/common';
import { TasksService } from '../../../modelo/tasks.service';
import { Controlador } from '../../../controlador/controlador';


@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {
  @Input({required: true}) task!: TaskInterface; 
  private TasksService = inject(Controlador);

  onCompleteTask(){
    this.TasksService.removeTask(this.task.id);
  }
  
}
