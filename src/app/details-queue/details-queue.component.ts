import { Component, OnInit } from '@angular/core';
import {QueueService} from "../service/queue.service";
import {Router} from "@angular/router";
import {Queue} from "../model/queue.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-edit-user',
  templateUrl: './details-queue.component.html',
  styleUrls: ['./details-queue.component.css']
})
export class DetailsQueueComponent implements OnInit {

  queue: Queue;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private userService: QueueService) { }

  ngOnInit() {
    let userId = localStorage.getItem("editUserId");
    if(!userId) {
      alert("Invalid action.")
      this.router.navigate(['list-user']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [],
      email: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
    this.userService.getUserById(+userId)
      .subscribe( data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.userService.updateUser(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['list-user']);
        },
        error => {
          alert(error);
        });
  }

}
