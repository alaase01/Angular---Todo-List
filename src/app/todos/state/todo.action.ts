import { Action } from '@ngrx/store';

import { Todo } from '../todo';


export enum TodoActionTypes {
    ChangeFilterOption = '[Todo] Change Filter Option',
    SetCurrentTodoList = '[Todo] Set Current Todo Item List',
    SetFilterTodoItems = '[Todo] Set Filter Todo Items'

}


export class ChangeFilterOption implements Action {
    readonly type = TodoActionTypes.ChangeFilterOption;

    constructor(public payload: number) { }
}

export class SetCurrentTodoList implements Action {
    readonly type = TodoActionTypes.SetCurrentTodoList;

    constructor(public payload: Todo[]) { }
}

export class SetFilterTodoItems implements Action {
    readonly type = TodoActionTypes.SetFilterTodoItems;

    constructor(public payload: Todo[]) { }
}


export type TodoActions = ChangeFilterOption | SetCurrentTodoList | SetFilterTodoItems; 