import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/model/todo';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit   {
  taskobj: Todo = {
    id: 0,
    task: ''
  }
  taskArr: any = [];

  addTaskData: string = '';
  constructor(private api: TaskService) {

  }

  ngOnInit(): void {
    this.getAllTask();
  }
  addTask() {
    this.taskobj.task = this.addTaskData
    this.api.addTask(this.taskobj).subscribe(res => {
   
      this.addTaskData = ''
    }, err => {
      alert(err);
    })
  }
  // getAllTask() {
  //   this.api.getAllTask().subscribe(res => {
  //     this.taskArr = res.task;
  //     this.ngOninit();
  //   }, err => {
  //     alert('Unable to find data');
  //   })
  // }
  getAllTask() {
    this.api.getAllTask().subscribe((res:Todo[])=>{
    console.log(res);
    this.taskArr=res;
    })

  }
  editTask() {
    this.api.editTask(this.taskobj).subscribe(res => {
     
    }, err => {
      alert('unable to update task');
    })
  }
  deleteTask(task: Todo) {
    this.api.DeleteTask(task).subscribe(res => {

    }, err => {
      alert('failed to delete task')
    })
  }
}
