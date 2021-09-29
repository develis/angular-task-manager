import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from './shared';
import { ListTaskComponent } from './list';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AddTaskComponent } from './add';
import { EditTasksComponent } from './edit';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    ListTaskComponent,
    AddTaskComponent,
    EditTasksComponent
  ],
  providers: [
    TaskService
  ]
})
export class TasksModule { }
