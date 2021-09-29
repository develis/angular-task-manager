import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService, Task } from '../shared';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @ViewChild('formTask', {static: true}) formTask: NgForm
  task: Task;
  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit() {
    this.task = new Task()
  }

  addTask(): void {
    if (this.formTask.form.valid) {
      this.taskService.addTask(this.task)
      this.router.navigate['/tasks']
    }
  }

}
