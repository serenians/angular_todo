import { ToDo } from '../../model/ToDo';

export interface IStorage{
    add:(model:ToDo)=>Number
    getAll:()=>ToDo[]
    clearAll:()=>void
    markAsCompleted:(id:Number)=>void
} 