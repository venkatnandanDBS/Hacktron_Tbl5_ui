import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Queue} from "../model/queue.model";
import { of } from "rxjs";
import { Message } from '../model/message.model';

@Injectable()
export class MessageService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8080/user-portal/users';
 
   mckMessage:Message[];

  getMessages() {
    this.mckMessage = [{queueId: "1", message: 'First Message'},
     {queueId: "2", message: 'Second Message'},
     {queueId: "3", message: 'Third Message'},
     {queueId: "4", message: 'Fourth Message'},
   ];
   return of(this.mckMessage);
    /* return this.http.get<User[]>(this.baseUrl); */
  }

  createMessage(message: Message) {
    /* return this.http.post(this.baseUrl, queue); */
    this.mckMessage.push(message);
    return of(this.mckMessage);
  }

  deleteUser(id: String) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}
