import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AddQueueComponent} from "./add-queue/add-queue.component";
import {ListQueueComponent} from "./list-queue/list-queue.component";
import {DetailsQueueComponent} from "./details-queue/details-queue.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'add-user', component: AddQueueComponent },
  { path: 'list-user', component: ListQueueComponent },
  { path: 'edit-user', component: DetailsQueueComponent },
  {path : '', component : LoginComponent}
];

export const routing = RouterModule.forRoot(routes);
