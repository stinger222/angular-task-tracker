import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private subject = new Subject<any>()
  private taskCreatorVisible: boolean = false

  constructor() { }

  toggleTaskCreator() {
    this.taskCreatorVisible = !this.taskCreatorVisible
    this.subject.next(this.taskCreatorVisible)
  }

  getTaskCreatorSubject(): Observable<any> {
    return this.subject.asObservable()
  }
}
