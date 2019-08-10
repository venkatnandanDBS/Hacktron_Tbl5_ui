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

  constructor(private formBuilder: FormBuilder,
    private router: Router, private userService: QueueService, private notificationService: NotificationBuilderService) { }

  addForm: FormGroup;

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      id: [],
      email: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });

  }

  onSubmit() {
    this.userService.createUser(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['list-user']);
      },(err)=>{
        this.notificationService.createDataSaveFailed(err.code,err.message);
      });
  }

}
