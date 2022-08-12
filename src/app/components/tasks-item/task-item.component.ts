import { ITask } from '../../models/tasks';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() task: ITask

  constructor() { }

  ngOnInit(): void {
  }

}
