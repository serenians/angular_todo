import { Component, OnInit } from '@angular/core';
import {ToDo} from '../../model/ToDo'
import { FormsModule } from '@angular/forms'
@Component({  
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  records: ToDo[];
  addNewModel : ToDo;
  constructor() { 
    // this.records = new ToDo[10];
  }

  ngOnInit() {
    this.addNewModel = new ToDo();
  }

  onAddNewToDo (form){
    console.log(form);
  }
}
