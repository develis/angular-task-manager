import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable()
export class TaskService {

  constructor() { }

  listTasks(): Task[] { // listasTodos
    const tasks = localStorage['tasks'];
    return tasks ? JSON.parse(tasks) : [];
  }

  addTask(task: Task): void {
    const tasks = this.listTasks();
    task.task_id = new Date().getTime();
    tasks.push(task);
    localStorage['tasks'] = JSON.stringify(tasks);
  }

  findById(task_id: number): Task {
    const tasks: Task[] = this.listTasks()
    return tasks.find(task => task.task_id === task_id)
  }

  update(task: Task): void {
    const tasks: Task[] = this.listTasks();
    tasks.forEach((obj, index, objs) => {
      if (task.task_id === obj.task_id) {
        objs[index] = task;
      }
    });
    localStorage['tasks'] = JSON.stringify(tasks);
  }

  remove(task_id: number): void {
    let tasks: Task[] = this.listTasks();
    tasks = tasks.filter(task => task.task_id !== task_id);
    localStorage['tasks'] = JSON.stringify(tasks);
  }

  changeDone(task_id: number): void {
    const tasks: Task[] = this.listTasks();
    tasks.forEach((obj, index, objs) => {
      if (task_id === obj.task_id) {
        objs[index].task_done = !obj.task_done;
      }
    });
    localStorage['tasks'] = JSON.stringify(tasks);
  }

}
