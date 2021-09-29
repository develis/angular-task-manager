import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { TaskService, Task } from '../shared';

@Component({
  selector: 'app-edit-tasks',
  templateUrl: './edit-tasks.component.html',
  styleUrls: ['./edit-tasks.component.css']
})
export class EditTasksComponent implements OnInit {

  @ViewChild('formTask') formTask: NgForm
  task: Task

  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let id = +this.route.snapshot.params['id']
    this.task = this.taskService.findById(id)
  }

  update(): void {
    if (this.formTask.form.valid){
      this.taskService.update(this.task)
      this.router.navigate(['/tasks'])
    }
  }

}
