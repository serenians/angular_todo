import { Injectable, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Subject, Subscription } from 'rxjs'
import { ToDo } from '../../model/ToDo';
import { _ } from 'underscore'
@Injectable({
  providedIn: 'root'
})

export class FirebaseStorageService {
  private key:string = "todoRecords";

  constructor(private firebaseDb: AngularFireDatabase) { }

  OnInit(){
  }

  itemsUpdated = new Subject();

  add(model:ToDo) {
    var items = this.firebaseDb.list('/todorecords').push(model);
    this.itemsUpdated.next();

    // var recordString = localStorage.getItem(this.key)
    // var record = JSON.parse(recordString);
    // record = record == null ? [] : record;
    // var max = _.max(record, function(item){ return item.Id});
    // var toAddModel  = new ToDo();
    // toAddModel.Id = max + 1;
    // toAddModel.CreatedTimeStamp = new Date();
    // toAddModel.IsComplete = false;
    // toAddModel.Task = model.Task;

    // record.push(toAddModel);

    // localStorage.setItem(this.key, JSON.stringify(record))
    // var number: Number =  max + 1;

    // this.itemsUpdated.next();
    return 1

  }
  
  getAll () {
    var empty : ToDo[] = [];
    var items = this.firebaseDb.list('/todorecords').valueChanges();
    items.subscribe(result=> {
      empty = result.map((value)=>{

        return value as ToDo;
        console.log(value);
      });// as ToDo[];
    });
    // var record = JSON.parse(recordString);

    // var empty : ToDo[] = [];
    // record = record == null ? empty : record;
    // var returnToDos : ToDo [] = [];
    // _.each(record, function(item){ 
    //   var returnModel = new ToDo();
    //   returnModel.CreatedTimeStamp = item.CreatedTimeStamp;
    //   returnModel.Id = item.Id;
    //   returnModel.Task = item.Task;
    //   returnModel.IsComplete = item.IsComplete;
    //   returnToDos.push(returnModel);
    // })     
      ;

      return empty;
  }

  clearAll() {

  };

  markAsCompleted(id: Number){

  };
}
