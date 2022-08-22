import { UiService } from './../../services/ui.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title: string = 'Task Tracker'
  taskCreatorVisible: boolean
  taskCreatorSubscription: Subscription

  constructor(private uiService: UiService, private router: Router) {
    this.taskCreatorSubscription = this.uiService.getTaskCreatorSubject().subscribe({
      next: (visibility) => {
        this.taskCreatorVisible = visibility
      }
    })
  }

  toggleTaskCreator() {
    this.uiService.toggleTaskCreator()
  }

  matchesRoute(route: string) {
    return this.router.url === route
  }
}
