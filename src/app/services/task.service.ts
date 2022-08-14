import { Injectable } from '@angular/core';
import { TASKS, ITask } from 'src/app/models/tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  public getTasks(): ITask[] {
    return TASKS
  }
}
