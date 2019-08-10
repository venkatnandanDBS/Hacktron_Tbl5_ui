import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {QueueService} from "../service/queue.service";
import {Queue} from "../model/queue.model";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-queue.component.html',
  styleUrls: ['./list-queue.component.css']
})
export class ListQueueComponent implements OnInit {

  queues: Queue[];

  constructor(private router: Router, private userService: QueueService) { }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe( data => {
        this.queues = data;
      });
  }

  deleteUser(queue: Queue): void {
    this.userService.deleteUser(queue.queueId)
      .subscribe( data => {
        this.queues = this.queues.filter(u => u !== queue);
      })
  };

  detailsQueue(queue: Queue): void {
    localStorage.removeItem("editUserId");
    localStorage.setItem("editUserId", queue.queueId.toString());
    this.router.navigate(['list-message']);
  };

  addQueue(): void {
    this.router.navigate(['add-queue']);
  };
}
