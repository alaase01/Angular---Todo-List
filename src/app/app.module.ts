import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';  
import { HttpClientModule } from '@angular/common/http';
import {StoreModule} from '@ngrx/store'; 
import {FormsModule} from '@angular/forms'; 

import { AppComponent } from './app.component';
import { DataService } from './todos/data.service';
import { MenuComponent } from './home/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { ShellComponent } from './home/shell.component';
import { PageNotFoundComponent } from './home/page-not-found.component';
import { TodoListComponent } from './todos/todo-list/todo-list.component';
import { TodoEnterComponent } from './todos/todo-enter/todo-enter.component';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ShellComponent,
    TodoListComponent,
    TodoEnterComponent,
    PageNotFoundComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    
    InMemoryWebApiModule.forRoot(DataService),
    StoreModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
