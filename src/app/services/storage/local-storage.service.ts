import { Injectable } from '@angular/core';
import { IStorage } from 'src/app/services/storage/storage'
import { ToDo } from 'src/app/model/ToDo'
import { _ } from 'underscore'
import { fromEventPattern } from 'rxjs';
import { toDate } from '@angular/common/src/i18n/format_date';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private key:string = "todoRecords";
  private records: ToDo[]

  add(model:ToDo) {
    var recordString = localStorage.getItem(this.key)
    var record = JSON.parse(recordString);
    record = record == null ? [] : record;
    var max = _.max(record, function(item){ return item.Id});
    var toAddModel  = new ToDo();
    toAddModel.Id = max + 1;
    toAddModel.CreatedTimeStamp = new Date();
    toAddModel.IsComplete = false;
    toAddModel.Task = model.Task;

    record.push(toAddModel);

    localStorage.setItem(this.key, JSON.stringify(record))
    var number: Number =  max + 1;
    return number
  }
  
  getAll () {
    var recordString = localStorage.getItem(this.key)
    var record = JSON.parse(recordString);
    // if(record == null){
    //   var r = new ToDo[0]();
    // }
    var empty : ToDo[] = [];
    record = record == null ? empty : record;
    var returnToDos : ToDo [] = [];
    _.each(record, function(item){ 
      var returnModel = new ToDo();
      returnModel.CreatedTimeStamp = item.CreatedTimeStamp;
      returnModel.Id = item.Id;
      returnModel.Task = item.Task;
      returnModel.IsComplete = item.IsComplete;
      returnToDos.push(returnModel);
      })
      
      ;

      return returnToDos;
    
  }
  clearAll() {

  };
  markAsCompleted(id: Number){

  };

  constructor() {
  }

  OnInit(){
    
  }



}
