import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Queue} from "../model/queue.model";
import { of } from "rxjs";

@Injectable()
export class QueueService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8080/user-portal/users';

   fakeUsers:Queue[]=[];

   queue: Queue;

  getUsers() {
    if(this.fakeUsers.length==0){
      this.fakeUsers = [{queueId: "1", queueName: 'Dhiraj', noOfMessage: "10"},
     {queueId: "2", queueName: 'Tom', noOfMessage: "10"},
     {queueId: "3", queueName: 'Hary', noOfMessage: "10"},
     {queueId: "4", queueName: 'praks', noOfMessage: "10"},
   ];
    }
   return of(this.fakeUsers);
  }

  getUserById(id: number) {
    return this.http.get<Queue>(this.baseUrl + '/' + id);
  }

  createQueue(queue: Queue) {
    /* return this.http.post(this.baseUrl, que  ue); */
    queue.queueId=String(this.fakeUsers.length+1);
    this.fakeUsers.push(queue);
    return of(this.fakeUsers);
  }

  updateUser(queue: Queue) {
    return this.http.put(this.baseUrl + '/' + queue.queueId, queue);
  }

  deleteQueue(queueName: String) {
   /*  this.queue=this.fakeUsers.filter(item => item.queueName == queueName);

    const index: number = this.fakeUsers.indexOf(queueName);
    if (index !== -1) {
        this.data.splice(index, 1);
    }   */   
    return this.http.delete(this.baseUrl + '/' + queueName);
  }
}
