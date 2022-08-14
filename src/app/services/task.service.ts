import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TASKS, ITask } from 'src/app/models/tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  public getTasks(): Observable<ITask[]> {
    const tasks = of(TASKS)
    return tasks
  }
}
