import {Component, OnInit} from '@angular/core';
import {TodoService} from './service/todo.service';
import {ToDo} from './todo';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
    todos: ToDo[];

    constructor(private todo: TodoService) {
    }

    ngOnInit() {
        this.getToDos();
    }

    getToDos(): void {
        this.todo.getToDos().subscribe
        (todos => {
            this.todos = todos;
        });
    }
}
