import {HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { TASKS, ITask } from 'src/app/models/tasks';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseApiUrl = 'http://localhost:3001/tasks'

  constructor() { }

  public getTasks(): Observable<ITask[]> {
    const tasks = of(TASKS)
    return tasks
  }
}
