import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from '../service/message.service';

import {NotificationBuilderService} from '../service/NotificationService';

@Component({
  selector: 'app-add-message',
  templateUrl: './add-message.component.html',
  styleUrls: ['./add-message.component.css']
})
export class AddMessageComponent implements OnInit {

  addForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private router: Router, private messageService: MessageService,
    private notificationService:NotificationBuilderService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.messageService.createMessage(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['list-queue']);
      },err => {
        this.notificationService.createDataSaveFailed(err.code,err.message);
      });
  }

}
