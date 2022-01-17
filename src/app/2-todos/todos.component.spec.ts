/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TodosComponent } from './todos.component';
import { HttpModule } from '@angular/http';
import { TodoService } from './todo.service';
import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';

//NOTE: I've deliberately excluded this suite from running
// because the test will fail. This is because we have not 
// provided the TodoService as a dependency to TodosComponent. 
// 
// When you get to Lecture 6 (Providing Dependencies), be sure
// to remove "x" from "xdescribe" below. 

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosComponent ],
      imports: [ HttpModule ],
      providers: [ TodoService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load todos from the server', () => {
    let service = TestBed.get(TodoService); // gets only the dependencies registered in app.module.ts
    // fixture.debugElement.injector.get(TodoService); // used to get dependencies registered in the component

    spyOn(service, 'getTodos').and.returnValue(from([[1,2,3]]));
    fixture.detectChanges();

    expect(component.todos.length).toBe(3);
  });
});
