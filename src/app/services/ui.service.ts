import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTaskForm: boolean = false;
  private subject = new Subject<boolean>();
  constructor() { }

  toggleAddTask(){
    this.showAddTaskForm = !this.showAddTaskForm;
    this.subject.next(this.showAddTaskForm);
  }

  onToggle(): Observable<boolean> {
    return this.subject.asObservable();
  }
}
