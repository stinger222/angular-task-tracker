import { TaskService } from './../../services/task.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

  deleteTask(task: ITask) {
    console.log("Deleting this item... ", task);

    this.taskService.deleteTask(task).subscribe(
      () => {
        console.log('Successfully deleted!')
        const toFilterIndexd = this.tasks.findIndex((i) => i.id === task.id)
        this.tasks.splice(toFilterIndexd, 1)
      },
      (error) => console.error('Deletion failed! \n', error)
    )
  }

  toggleReminder(task: ITask) {
    console.log('Trying to toggle reminder...');

    this.taskService.toggleReminder(task).subscribe(
      () => {
        console.log('Successfully toggled!')
        const targetTask: ITask | undefined = this.tasks.find(i => i.id === task.id)
        if (targetTask) targetTask.reminder = !task.reminder
      },
      (error) => console.error('Can\' toggle reminder! \n', error)
    )
  }
}
