import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './todo';
import { Observable, of, throwError } from 'rxjs';

import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TododataService {
  
  private todoUrl = 'api/todos';
  private todos: Todo[];
  constructor(private http: HttpClient) { }



  getTodos(): Observable<Todo[]> {
   
    if (this.todos) {
      return of(this.todos);
    } 
    return this.http.get<Todo[]>(this.todoUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        tap(data => this.todos = data)
        
      );
  }

  createTodo(todo: Todo): Observable<Todo> {
   
    todo.id = null;
    return this.http.post<Todo>(this.todoUrl, todo)
      .pipe(
        tap(data => console.log('createTodo: ' + JSON.stringify(data))),
        tap(data => {
          this.todos.push(data);
        }),
        catchError(this.handleError)
      );
  }

  deleteTodo(id: number): Observable<Todo> {
    
    const url = `${this.todoUrl}/${id}`;
    return this.http.delete<Todo>(url)
      .pipe(
        tap(data => console.log('deleteTodo: ' + id)),
        tap(data => {
          const foundIndex = this.todos.findIndex(item => item.id === id);
          if (foundIndex > -1) {
            this.todos.splice(foundIndex, 1);
          }
        }),
        catchError(this.handleError)
      );
  }




  updateTodoStatus(todo: Todo): Observable<Todo> {

    const url = `${this.todoUrl}/${todo.id}`;
    return this.http.put<Todo>(url, todo)
      .pipe(
        tap(() => console.log('updateTodo: ' + todo.id)),
        // Update the item in the list
        // This is required because the selected product that was edited
        // was a copy of the item from the array.
        tap(() => {
          const foundIndex = this.todos.findIndex(item => item.id === todo.id);
          if (foundIndex > -1) {
            this.todos[foundIndex] = todo;
          }
        }),
        // Return the product on an update
        map(() => todo),
        catchError(this.handleError)
      );
  }



  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

  
}
