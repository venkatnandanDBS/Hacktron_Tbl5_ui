import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../service/user.service";
import {Queue} from "../model/user.model";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  queues: Queue[];

  constructor(private router: Router, private userService: UserService) { }

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

  editUser(queue: Queue): void {
    localStorage.removeItem("editUserId");
    localStorage.setItem("editUserId", queue.queueId.toString());
    this.router.navigate(['edit-user']);
  };

  addUser(): void {
    this.router.navigate(['add-user']);
  };
}
