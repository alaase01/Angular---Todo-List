import { Todo } from '../todo';
import * as fromRoot from '../../state/app.state'; 
import { InitialState } from '@ngrx/store/src/models';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoActions, TodoActionTypes } from './todo.action';

export interface State extends fromRoot.State{
    todos: TodoState; 
}

export interface TodoState {
    currentFilterOption: number,
    currentTodos: Todo[],
    filteredTodos: Todo[];
 

}

const initialState: TodoState = {
    currentFilterOption:  3,
     currentTodos: [],
    filteredTodos: []
}

const getTodoFeatureState= createFeatureSelector<TodoState>('todos'); 

export const currentFilterOption = createSelector(
    getTodoFeatureState,
    state => state.currentFilterOption
); 


export const getfilteredTodos = createSelector(
    getTodoFeatureState,
    state => state.filteredTodos
);

export const getCurrentTodos = createSelector(
    getTodoFeatureState,
    state => state.currentTodos
);

export function reducer(state = initialState, action: TodoActions): TodoState{

    switch(action.type) {

    case TodoActionTypes.ChangeFilterOption:
    return {
        ...state, 
        currentFilterOption: action.payload
        
    }

    case TodoActionTypes.SetCurrentTodoList: 
    return {
        ...state, 
        currentTodos : action.payload
        
    }
    
    case TodoActionTypes.SetFilterTodoItems: 
    return {
        ...state, 
        filteredTodos : action.payload
        
    }

    default:
        return state; 
}

}