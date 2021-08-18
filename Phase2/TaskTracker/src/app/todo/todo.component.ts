import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Tasks } from '../task.model';
import { DataSource } from '@angular/cdk/collections';
import { Observable, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {


  listSize: Boolean = false;
  msg: String = "";
  displayedColumns: string[] = ['id', 'name', 'task', 'deadline'];
  dataToDisplay = [...taskData];
  dataSource = new ExampleDataSource(this.dataToDisplay);

  constructor() { }

  ngOnInit(): void {
  }

  addTask(taskRef:NgForm) {
    this.listSize = true;
    let tempTask = taskRef.value;
    if (tempTask.id == null && tempTask.name == null && tempTask.task == null && tempTask.deadline == null) {
      this.msg = "";
    }
    else {
      let newTask = new Tasks(String(tempTask.id), String(tempTask.name), String(tempTask.task), String(tempTask.deadline));
      taskData.push(newTask);
      this.dataToDisplay = taskData;
      this.dataSource.setData(this.dataToDisplay);
      taskRef.reset();
      this.msg = "Successfully added new task!"
    }
  }

  removeMsg() {
    this.msg = "";
  }
}

const taskData: Tasks[] = new Array();

class ExampleDataSource extends DataSource<Tasks> {
  private _dataStream = new ReplaySubject<Tasks[]>();

  constructor(initialData: Tasks[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<Tasks[]> {
    return this._dataStream;
  }

  disconnect() {}

  setData(data: Tasks[]) {
    this._dataStream.next(data);
  }
}