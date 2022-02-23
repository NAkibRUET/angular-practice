import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { ITask, TASKS } from '../mock-task';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = "http://localhost:3000/tasks";
  constructor(private http:HttpClient) { }

  getTasks(): Observable<ITask[]>{
    return this.http.get<ITask[]>(this.apiUrl);
  }

  deleteTask(task:ITask): Observable<ITask>{
    const url = `${this.apiUrl}/${task.id}`
    return this.http.delete<ITask>(url);
  }
  toggleReminder(task:ITask): Observable<ITask>{
    const url = `${this.apiUrl}/${task.id}`
    task.reminder = !task.reminder;
    return this.http.put<ITask>(url, task, httpOptions);
  }

  addTask(task:ITask): Observable<ITask>{
    return this.http.post<ITask>(this.apiUrl, task, httpOptions);
  }
}
