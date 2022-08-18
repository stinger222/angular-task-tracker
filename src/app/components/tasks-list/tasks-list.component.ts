import { TaskService } from './../../services/task.service';
import { Component, OnInit } from '@angular/core';
import { ITask } from 'src/app/models/tasks';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {
  tasks: ITask[] = []


  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(
      (tasks) => this.tasks = tasks,
      (error) => console.error(error)
    )
  }

}
