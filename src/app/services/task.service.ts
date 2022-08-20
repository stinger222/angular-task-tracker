import {HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { ITask } from 'src/app/models/tasks';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseApiUrl = 'http://localhost:3001/tasks'

  constructor(private http: HttpClient) { }

  public getTasks(): Observable<ITask[]> {
    return this.http.get<ITask[]>(this.baseApiUrl)
  }

  public deleteTask(task: ITask): Observable<ITask> {
    const url = `${this.baseApiUrl}/${task.id}`
    return this.http.delete<ITask>(url)
  }

  public toggleReminder(task: ITask): Observable<ITask> {
    const url = `${this.baseApiUrl}/${task.id}`
    return this.http.put<ITask>(url, {
      ...task,
      reminder: !task.reminder
    })
  }

  public addTask(newTask: ITask): Observable<ITask> {
    const url = `${this.baseApiUrl}/`
    return this.http.post<ITask>(url, newTask)
  }
}
