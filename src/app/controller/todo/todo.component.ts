import { Component, OnInit, OnDestroy } from '@angular/core';
import {ToDo} from '../../model/ToDo'
import { FormsModule } from '@angular/forms'
import { LocalStorageService } from '../../services/storage/local-storage.service';
import { Subscription } from 'rxjs'

@Component({  
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  records: ToDo[];
  addNewModel : ToDo;
  private subscription: Subscription;
  constructor(private storageService: LocalStorageService) { 
    // this.records = new ToDo[10];
  }

  ngOnInit() {
    this.addNewModel = new ToDo();
    this.records = this.storageService.getAll();
    this.subscription = this.storageService.itemsUpdated.subscribe(()=>{
      this.records = this.storageService.getAll();
    })
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.storageService.itemsUpdated.unsubscribe();
  }

  onSubmit (form){
    console.log(this.addNewModel);
    this.storageService.add(this.addNewModel);
  }
}
