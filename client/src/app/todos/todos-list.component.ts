import { Component } from '@angular/core';
import { TodosListService } from "./todos-list.service";
import { FormsModule } from '@angular/forms';
import { FilterBy2 } from "./filter.pipe";

@Component({
    selector: 'todos-list-component',
    providers: [TodosListService],
    templateUrl: 'todos-list.component.html',
})

export class TodosListComponent {
    private todos: any;

    constructor(private _todosListService: TodosListService) {
        this.todos = _todosListService.getTodos();
    }
}