import { Injectable } from '@angular/core';
import { TasksService } from '../modelo/tasks.service';
import { NewTaskData } from "../vista/tasks/task/task.model";

@Injectable({
  providedIn: 'root'
})
export class Controlador {
  constructor(private TaskService: TasksService){}
  
  addTask(taskData: NewTaskData, userId: string){
    this.TaskService.addTask(taskData, userId);
  }

  removeTask(id: string){
    this.TaskService.removeTask(id);
  }

  getUserTasks(userId: string){
    return this.TaskService.getUserTasks(userId);
  }

    //   removeTask(id: string){
    //     this.tasks = this.tasks.filter(obj => obj.id != id);
    //     this.saveTasks();
    // }
}
