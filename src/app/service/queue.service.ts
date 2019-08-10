import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Queue} from "../model/queue.model";
import { of } from "rxjs";

@Injectable()
export class QueueService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8080/user-portal/users';
 
   fakeUsers:Queue[]=[];

  getUsers() {
    if(this.fakeUsers.length==0){
      this.fakeUsers = [{queueId: "1", queueName: 'Dhiraj', noOfMessage: "10"},
     {queueId: "2", queueName: 'Tom', noOfMessage: "10"},
     {queueId: "3", queueName: 'Hary', noOfMessage: "10"},
     {queueId: "4", queueName: 'praks', noOfMessage: "10"},
   ];
    }
   return of(this.fakeUsers);
    /* return this.http.get<User[]>(this.baseUrl); */
  }

  getUserById(id: number) {
    return this.http.get<Queue>(this.baseUrl + '/' + id);
  }

  createQueue(queue: Queue) {
    /* return this.http.post(this.baseUrl, que  ue); */
    this.fakeUsers.push(queue);
    return of(this.fakeUsers);
  }

  updateUser(queue: Queue) {
    return this.http.put(this.baseUrl + '/' + queue.queueId, queue);
  }

  deleteUser(id: String) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}
