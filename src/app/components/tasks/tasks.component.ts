import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITask } from 'src/app/mock-task';
import { TaskService } from 'src/app/services/task.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  showAddTask:boolean = false;
  tasks:ITask[] = [];
  subscription: Subscription;

  constructor(private taskService: TaskService, private uiService: UiService) {
    this.subscription = uiService.onToggle().subscribe((value)=>{
      this.showAddTask = value;
    })
  }

  ngOnInit(): void {
    this.getTaskList()
  }

  getTaskList(){
    this.taskService.getTasks().subscribe((tasks)=> {
      this.tasks=tasks;
    });
  }

  deleteTask(task:ITask){
    this.taskService.deleteTask(task).subscribe(()=>{
      this.getTaskList();
    })
  }

  toggleTask(task:ITask){
    this.taskService.toggleReminder(task).subscribe(()=>{
      this.getTaskList();
    })
  }

  addTask(task:ITask){
    this.taskService.addTask(task).subscribe(()=>{
      this.getTaskList();
    })
  }

  

}
