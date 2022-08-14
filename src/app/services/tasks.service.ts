import { Injectable } from '@angular/core';
import { TASKS, ITask } from 'src/app/models/tasks';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  public getTasks(): ITask[] {
    return TASKS
  }
}
