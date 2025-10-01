import { Component, Input } from '@angular/core';
import { Task } from './task/task';
import { NewTask } from './new-task/new-task';
import { TasksService } from '../../modelo/tasks.service';
import { NewTaskData } from './task/task.model';
import { Controlador } from '../../controlador/controlador';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  @Input({required: true}) name?: string;
  @Input({required: true}) userId!: string; //user
  isAddingTask = false;

  // con crear el constructor ya angular sabe q es un servicio y q le toca instanciarlo, angular lo hace debajo de cuerda
  constructor(private TasksService: Controlador){}

  get selectedUserTasks() {
    return this.TasksService.getUserTasks(this.userId);
  }

  onStartAddTask(){
    this.isAddingTask = true;
  }

  onCloseAddTask(){
    this.isAddingTask = false;
  }

}
