import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Queue} from "../model/user.model";
import { of } from "rxjs";

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8080/user-portal/users';
 
   fakeUsers:Queue[]=[];

  getUsers() {
    this.fakeUsers = [{queueId: "1", queueName: 'Dhiraj'},
     {queueId: "2", queueName: 'Tom'},
     {queueId: "3", queueName: 'Hary'},
     {queueId: "4", queueName: 'praks'},
   ];
   return of(this.fakeUsers);
    /* return this.http.get<User[]>(this.baseUrl); */
  }

  getUserById(id: number) {
    return this.http.get<Queue>(this.baseUrl + '/' + id);
  }

  createUser(queue: Queue) {
    /* return this.http.post(this.baseUrl, queue); */
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
