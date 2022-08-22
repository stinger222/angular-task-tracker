import { Subscription } from 'rxjs';
import { UiService } from './../../services/ui.service';
import { ITask } from './../../models/tasks';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-task-creator',
  templateUrl: './task-creator.component.html',
  styleUrls: ['./task-creator.component.scss']
})
export class TaskCreatorComponent implements OnInit {
  text: string
  day: string
  reminder: boolean = false
  isVisible: boolean = false
  taskCreatorSubject: Subscription;

  @Output() onAddTask = new EventEmitter()

  constructor(private uiService: UiService) {
    this.taskCreatorSubject = this.uiService.getTaskCreatorSubject().subscribe({
      next: (visibility) => this.isVisible = visibility
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    if (!this.text || !this.day) {
      alert('Please fill both fields!')
      return
    }

    const newTask: ITask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    }

    this.onAddTask.emit(newTask)

    this.text = ''
    this.day = ''
    this.reminder = false
  }
}
