import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { ITask } from 'src/app/mock-task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() task?:ITask
  @Output() onDeleteTask: EventEmitter<ITask> = new EventEmitter;
  @Output() onToggleTask: EventEmitter<ITask> = new EventEmitter;
  fatimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task:ITask){
    this.onDeleteTask.emit(task);
  }
  onToggle(task:ITask){
    this.onToggleTask.emit(task);
  }

}
