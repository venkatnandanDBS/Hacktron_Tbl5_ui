import { Component, OnInit } from '@angular/core';
import { Message } from '../model/message.model';
import { Router } from '@angular/router';
import { MessageService } from '../service/message.service';

@Component({
  selector: 'app-list-message',
  templateUrl: './list-message.component.html',
  styleUrls: ['./list-message.component.css']
})
export class ListMessageComponent implements OnInit {

  messages: Message[]; 

  constructor(private router: Router,private service: MessageService) { }

  ngOnInit() {
    this.service.getMessages()
      .subscribe( data => {
        this.messages = data;
      });
  }



}
