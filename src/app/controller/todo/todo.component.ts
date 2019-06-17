import { Component, OnInit } from '@angular/core';
import {ToDo} from '../../model/ToDo'

@Component({  
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  records: ToDo[];
  constructor() { 
    this.records = new ToDo[10];
  }

  ngOnInit() {
  }

}
