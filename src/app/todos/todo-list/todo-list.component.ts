import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TododataService } from '../tododata.service';

import { Todo } from '../todo';
import { Store, select } from '@ngrx/store';
import * as fromTodo from '../state/todo.reducer'; 
import * as todoActions from '../state/todo.action'; 


@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  errorMessage: string;
  selectedTodo: Todo | null;
  showPending: boolean ;
  showCompleted: boolean ;
  showAll: boolean; 


  filteredTodos: Todo[] = [];



  constructor(private tododataService: TododataService,
    private store: Store<fromTodo.State>) { }

  ngOnInit() {
 

    this.tododataService.getTodos().subscribe({
      next: (todos: Todo[]) => {
        this.todos = todos;
        this.filteredTodos = todos;

      },
      error: (err: any) => this.errorMessage = err.error
    });


    // this.store.pipe(select(fromTodo.getShowAllItems)).subscribe(
    //   showAllItems => this.showAll=showAllItems
    //   );

  }




  deleteTodo(id: number): void {

    console.log("Item to be deleted is:", id);

    this.tododataService.deleteTodo(id).subscribe({
      next: () => {
        console.log("done");
        this.filteredTodos = Object.assign([], this.todos);
        //this.showAll = true;
      },
      error: err => this.errorMessage = err.error
    });
    //   this.selectedTodo=null;

  }

  updateTodoStatus(id: number): void {
    // Used to highlight the selected item
    const foundIndex = this.todos.findIndex(item => item.id === id);
    if (foundIndex > -1) {
      this.selectedTodo = this.todos[foundIndex];

      console.log("Item to be updated is:", this.selectedTodo.id);

      if (this.selectedTodo.status === 'Pending') {
        this.selectedTodo.status = "Done"
      } else {
        this.selectedTodo.status = "Pending"
      }
    }
    this.tododataService.updateTodoStatus(this.selectedTodo).subscribe({
      next: () => {
        console.log("done", this.showAll);
        this.filteredTodos = Object.assign([], this.todos);
        // this.showAll = true;
      },
      error: err => this.errorMessage = err.error
    });
  }

  showPendingItems(value: boolean): void {
    this.showPending = value;
    this.showCompleted = false;
    this.showAll = false;

    this.store.dispatch(new todoActions.ChangeFilterOption(1));

      this.filteredTodos = this.todoFilter('Pending'); 

   
  }


  showCompletedItems(value: boolean): void {
    this.showPending = false;
    this.showCompleted = value;
    this.showAll = false;

    this.store.dispatch(new todoActions.ChangeFilterOption(2));

    this.filteredTodos = this.todoFilter('Done'); 
   
  }


  showAllItems(value: boolean): void {
    this.showPending = false;
    this.showCompleted = false;
    this.showAll = value;

    this.store.dispatch(new todoActions.ChangeFilterOption(3));


    this.filteredTodos = this.todoFilter (null); 


    console.log("showAll");
  }

todoFilter (value: string | null): Todo[]{

  if (value){
  return Object.assign([], this.todos.filter((todo: Todo) =>
      todo.status.indexOf(value) !== -1));
    } else {
        return Object.assign([], this.todos);
    }


}



}