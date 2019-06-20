import { Component, OnInit, OnDestroy } from '@angular/core';
import {ToDo} from '../../model/ToDo'
import { FormsModule } from '@angular/forms'
import { LocalStorageService } from '../../services/storage/local-storage.service';
import { Subscription } from 'rxjs'
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseStorageService } from '../../services/storage/firebase-storage.service';

@Component({  
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  records: ToDo[];
  addNewModel : ToDo;
  private subscription: Subscription;
  constructor(private storageService: LocalStorageService, private firebaseStorageService : FirebaseStorageService) { 
    // this.records = new ToDo[10];
    this.firebaseStorageService.getAll();
  }

  ngOnInit() {
    this.addNewModel = new ToDo();
    // this.records = this.storageService.getAll();
    // this.subscription = this.storageService.itemsUpdated.subscribe(()=>{
    //   this.records = this.storageService.getAll();
    // })
    this.records = this.firebaseStorageService.getAll();
    this.subscription = this.firebaseStorageService.itemsUpdated.subscribe(()=>{
      this.records = this.firebaseStorageService.getAll();
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
    this.firebaseStorageService.add(this.addNewModel);
  }
}
