import { ITask } from '../../models/tasks';
import { Component, Input, OnInit } from '@angular/core';
import { faTimes, IconDefinition } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() task: ITask
  faTimes: IconDefinition = faTimes

  constructor() { }

  ngOnInit(): void {
  }

}
