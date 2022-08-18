import { ITask } from '../../models/tasks';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { faTimes, IconDefinition } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() task: ITask
  @Output() onDeleteTask = new EventEmitter<ITask>();

  faTimes: IconDefinition = faTimes

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task: ITask) {
    this.onDeleteTask.emit(task)
  }
}
