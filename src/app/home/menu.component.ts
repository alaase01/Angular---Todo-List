import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'todo-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  pageTitle = 'What are you going to do today?';

 

  

  constructor() { }

  ngOnInit() {
  }

  logOut(): void {
  ;
  }
}
