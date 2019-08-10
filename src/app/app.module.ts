import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {routing} from "./app.routing";
import {AuthenticationService} from "./service/auth.service";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AddQueueComponent } from './add-queue/add-queue.component';
import { DetailsQueueComponent } from './details-queue/details-queue.component';
import {ListQueueComponent} from "./list-queue/list-queue.component";
import {QueueService} from "./service/queue.service";
import { ListMessageComponent } from './list-message/list-message.component';
import { SimpleNotificationsModule } from 'angular2-notifications';
import {NotificationBuilderService} from "./service/NotificationService";
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListQueueComponent,
    AddQueueComponent,
    DetailsQueueComponent,
    ListMessageComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule,
    SimpleNotificationsModule.forRoot()
  ],
  providers: [AuthenticationService, QueueService, NotificationBuilderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
