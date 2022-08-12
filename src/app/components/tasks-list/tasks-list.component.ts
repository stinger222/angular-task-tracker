import { Component, OnInit } from '@angular/core';
import { TASKS, ITask } from 'src/app/models/tasks';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {
  tasks: ITask[] = TASKS

  constructor() { }

  ngOnInit(): void {
  }

}
