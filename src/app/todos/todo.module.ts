import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* NgRx */
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/todo.reducer';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('todos', reducer) 
  ]
})
export class TodoModule { }
