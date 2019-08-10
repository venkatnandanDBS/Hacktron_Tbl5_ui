import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AddQueueComponent} from "./add-queue/add-queue.component";
import {ListQueueComponent} from "./list-queue/list-queue.component";
import {DetailsQueueComponent} from "./details-queue/details-queue.component";
import { ListMessageComponent } from './list-message/list-message.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'add-queue', component: AddQueueComponent },
  { path: 'list-queue', component: ListQueueComponent },
  { path: 'edit-user', component: DetailsQueueComponent },
  { path: 'list-message', component: ListMessageComponent },
  {path : '', component : LoginComponent}
];

export const routing = RouterModule.forRoot(routes);
