import { Component, OnInit } from '@angular/core';
import { TodosListService } from "./todos-list.service";
import { Todos } from './todos';
import { FilterBy } from "./filter.pipe";

@Component({
    selector: 'todos-list-component',
    providers: [
        TodosListService,
        FilterBy
    ],
    templateUrl: 'todos-list.component.html',
})

export class TodosListComponent implements OnInit{
    public todos: Todos[];

    constructor(private todosListService: TodosListService) {
        // this.users = this.userListService.getUsers();
    }

    ngOnInit(): void {
        this.todosListService.getTodos().subscribe(
            todos => this.todos = todos,
            err => {
                console.log(err);
            }
        );
    }
}