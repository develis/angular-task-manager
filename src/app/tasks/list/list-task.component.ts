import { Component, OnInit } from '@angular/core';
import { TaskService, Task } from '../shared';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {

  tasks: Task[]

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.tasks = this.listTasks()
  }

  listTasks(): Task[] {
    return this.taskService.listTasks()
  }

  changeDone(task: Task): void {
    if (confirm(`Are you sure you wanna change "${task.task_name}" status? `)) {
      this.taskService.changeDone(task.task_id)
      this.tasks = this.listTasks()
    } else {
      this.tasks = this.listTasks()
    }
  }

  remove($event: any, task: Task): void {
    $event.preventDefault()
    if (confirm(`Are you sure you wanna delete "${task.task_name}"?`)){
      this.taskService.remove(task.task_id)
      this.tasks = this.listTasks()
    }
  }

}
