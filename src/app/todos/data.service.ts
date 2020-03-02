import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'

import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }
  createDb(){

    const todos: Todo[] =  [
    {  id:  1,  task:  'Buy milk', priority: 'High', status: 'Done'},
    {  id:  2,  task:  'Buy bread', priority: 'High', status: 'Pending'}

   ];

   return {todos};

  }
}
