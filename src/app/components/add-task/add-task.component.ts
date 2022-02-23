import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ITask } from 'src/app/mock-task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<ITask> = new EventEmitter;
  task: string = "";
  day: string = "";
  reminder: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.task === ""){
      alert("Please add a task");
      return;
    }
    const newTask:ITask = {
      text: this.task,
      day: this.day,
      reminder: this.reminder,
    }

    this.onAddTask.emit(newTask);

    this.task = "";
    this.day = "";
    this.reminder = false;

  }
}
