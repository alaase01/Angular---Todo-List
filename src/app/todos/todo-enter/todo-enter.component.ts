import { Component, OnInit } from '@angular/core';


import { TododataService } from '../tododata.service';
import { Todo } from '../todo';

@Component({
  selector: 'todo-enter',
  templateUrl: './todo-enter.component.html',
  styleUrls: ['./todo-enter.component.css']
})
export class TodoEnterComponent implements OnInit {

  todoItemValue: string = ''; 
  errorMessage: string='';

  todoItem: Todo= { id:  0,  task:  'sample', priority: 'Normal', status: 'Pending'};

  constructor(private tododataService: TododataService) { }

  ngOnInit() {
  }

  addNewTodo(): void {
  
    // if (this.productForm.valid) {
    //   if (this.productForm.dirty) {
    //     // Copy over all of the original product properties
    //     // Then copy over the values from the form
    //     // This ensures values not on the form, such as the Id, are retained
        const p = { ...this.todoItem, task: this.todoItemValue };

        
          this.tododataService.createTodo(p).subscribe({
            next: product => console.log ("created"),
            error: err => this.errorMessage = err.error
          });
        
    this.todoItemValue=''; 
  }

}
