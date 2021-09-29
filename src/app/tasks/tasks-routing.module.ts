import { Routes } from "@angular/router";
import { AddTaskComponent } from "./add";
import { ListTaskComponent } from "./list";
import { EditTasksComponent } from "./edit";

export const TaskRoutes: Routes = [
    {
        path: 'tasks',
        redirectTo: 'tasks/list'
    },
    {
        path: 'tasks/list',
        component: ListTaskComponent
    },
    {
        path: 'tasks/add',
        component: AddTaskComponent
    },
    {
        path: 'tasks/edit/:id',
        component: EditTasksComponent
    }
]