import { TaskService } from './../../services/task.service';
import { UiService } from './../../services/ui.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title: string = 'Task Tracker'
  taskCreatorVisible: boolean
  taskCreatorSubscription: Subscription

  constructor(private uiService: UiService) {
    this.taskCreatorSubscription = this.uiService.getTaskCreatorSubject().subscribe({
      next: (visibility) => {
        this.taskCreatorVisible = visibility
        console.log('visibility: ', visibility);

      }
    })
  }

  toggleTaskCreator() {
    this.uiService.toggleTaskCreator()
  }
}
