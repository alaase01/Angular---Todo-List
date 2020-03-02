import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoEnterComponent } from './todo-enter.component';

describe('TodoEnterComponent', () => {
  let component: TodoEnterComponent;
  let fixture: ComponentFixture<TodoEnterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoEnterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoEnterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
