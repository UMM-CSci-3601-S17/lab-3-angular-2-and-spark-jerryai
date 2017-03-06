import { Component, OnInit } from '@angular/core';
import { TodosListService } from "./todos-list.service";
import { Todos } from "./todos";

@Component({
    selector: 'todos-component',
    templateUrl: 'todos.component.html'
})
export class TodosComponent implements OnInit {
    public todo: Todos = null;
    private id: string;

    constructor(private todosListService: TodosListService) {
        // this.users = this.userListService.getUsers();
    }

    private subscribeToServiceForId() {
        if (this.id) {
            this.todosListService.getTodoById(this.id).subscribe(
                todo => this.todo = todo,
                err => {
                    console.log(err);
                }
            );
        }
    }

    setId(id: string) {
        this.id = id;
        this.subscribeToServiceForId();
    }

    ngOnInit(): void {
        this.subscribeToServiceForId();
    }
}
