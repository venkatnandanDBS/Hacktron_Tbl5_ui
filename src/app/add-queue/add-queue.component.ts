import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {QueueService} from "../service/queue.service";
import {Router} from "@angular/router";
import {NotificationBuilderService} from "./../service/NotificationService";
@Component({
  selector: 'app-add-user',
  templateUrl: './add-queue.component.html',
  styleUrls: ['./add-queue.component.css']
})
export class AddQueueComponent implements OnInit {

<<<<<<< HEAD
  constructor(private formBuilder: FormBuilder,
    private router: Router, private userService: QueueService, private notificationService: NotificationBuilderService) { }
=======
  constructor(private formBuilder: FormBuilder,private router: Router, private messageService: QueueService) { }
>>>>>>> 1e115d0066e85586f1d31b91f9e294433ce3dea4

  addForm: FormGroup;

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      queueName: [],
      noOfMessage: ['', Validators.required]
    });

  }

  onSubmit() {
    this.messageService.createQueue(this.addForm.value)
      .subscribe( data => {
<<<<<<< HEAD
        this.router.navigate(['list-user']);
      },(err)=>{
        this.notificationService.createDataSaveFailed(err.code,err.message);
=======
        this.router.navigate(['list-queue']);
>>>>>>> 1e115d0066e85586f1d31b91f9e294433ce3dea4
      });
  }

}
