import {Component, OnInit} from '@angular/core';
import {TodoService} from './service/todo.service';
import {ToDo} from './todo';
import { MatSelectionListChange } from '@angular/material/list';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
    todos: ToDo[];
    currentTodo: ToDo;

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

    getToDosByUser(userId: number): void {
        this.todo.getToDosByUser(userId).subscribe
        (todos => {
            this.todos = todos;
        });
    }

    toggleSelection(event: MatSelectionListChange) {
        if ( event instanceof MatSelectionListChange) {
            this.currentTodo = event.option.value;
            this.currentTodo.completed = !this.currentTodo.completed;
            this.todos[this.currentTodo.id - 1].completed = this.currentTodo.completed;
        } else {
            console.error ('error', 'Wrong event Class');
        }
    }
}
