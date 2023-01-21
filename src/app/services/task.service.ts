import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  baseUrl!: string;
  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:3000/task/'
  }
  addTask(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.baseUrl, todo);
  }
  getAllTask(): Observable<Todo[]> {
    return this.http.get<any>(this.baseUrl);
  }
  DeleteTask(todo: Todo): Observable<Todo> {
    return this.http.delete<Todo>(this.baseUrl + '/' + todo.id,);
  }
  editTask(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.baseUrl + '/' + todo.id, todo);
  }

}
