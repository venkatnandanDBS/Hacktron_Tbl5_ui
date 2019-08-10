import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {QueueService} from "../service/queue.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-queue.component.html',
  styleUrls: ['./add-queue.component.css']
})
export class AddQueueComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private userService: QueueService) { }

  addForm: FormGroup;

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      queueName: [],
      noOfMessage: ['', Validators.required]
    });

  }

  onSubmit() {
    this.userService.createQueue(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['list-queue']);
      });
  }

}
