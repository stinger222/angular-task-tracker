import { TaskService } from '../../services/task.service';
import { Component, OnInit } from '@angular/core';
import { ITask } from 'src/app/models/tasks';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks: ITask[] = []

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe({
      next: (tasks) => {
        this.tasks = tasks
      },
      error: (error) => console.error(error)
    })
  }


  deleteTask(task: ITask) {
    console.log("Deleting this item... ", task);

    this.taskService.deleteTask(task).subscribe({
      complete: () => {
        console.log('Task successfully deleted!')
        const toFilterIndexd = this.tasks.findIndex((i) => i.id === task.id)
        this.tasks.splice(toFilterIndexd, 1)
      },
      error: (error) => console.error('Deletion failed! \n', error)
    }


    )
  }

  toggleReminder(task: ITask) {
    console.log('Trying to toggle reminder...');

    this.taskService.toggleReminder(task).subscribe({
      complete: () => {
        console.log('Reminder successfully toggled!')
        const targetTask: ITask | undefined = this.tasks.find(i => i.id === task.id)
        if (targetTask) targetTask.reminder = !task.reminder
      },
      error: (error) => console.error('Can\' toggle reminder! \n', error)
    })
  }

  addTask(newTask: ITask) {
    const biggestId = this.tasks.slice(-1)[0]?.id || 0
    newTask.id = newTask.id ? newTask.id : biggestId + 1

    console.log("Trying to create new task... ", newTask)

    this.taskService.addTask(newTask).subscribe({
      complete: () => {
        console.log("Task successfully created!")
        this.tasks.push(newTask)
      },
      error: (error) => console.error('Task creation failed! \n', error)
    }
    )
  }
}
