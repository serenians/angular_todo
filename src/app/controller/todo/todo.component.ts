import { Component, OnInit } from '@angular/core';
import {ToDo} from '../../model/ToDo'
import { FormsModule } from '@angular/forms'
import { LocalStorageService } from '../../services/storage/local-storage.service';
@Component({  
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  records: ToDo[];
  addNewModel : ToDo;
  constructor(private storageService: LocalStorageService) { 
    // this.records = new ToDo[10];
  }

  ngOnInit() {
    this.addNewModel = new ToDo();
    this.records = this.storageService.getAll();
  }

  onSubmit (form){
    console.log(this.addNewModel);
    this.storageService.add(this.addNewModel);
  }
}
