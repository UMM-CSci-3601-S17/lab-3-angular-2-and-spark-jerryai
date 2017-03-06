/*
import { ComponentFixture, TestBed, async } from "@angular/core/testing";
import { Todos } from "./todos";
import { TodosListComponent } from "./todos-list.component";
import { TodosListService } from "./todos-list.service";
import { Observable } from "rxjs";
import { PipeModule } from "../../pipe.module";

describe("Todos list", () => {

    let todosList: TodosListComponent;
    let fixture: ComponentFixture<TodosListComponent>;

    let todosListServiceStub: {
        getTodos: () => Observable<Todos[]>
    };

    beforeEach(() => {
        // stub UserService for test purposes
        todosListServiceStub = {
            getTodos: () => Observable.of([
                /*    {
                    _id: "chris_id",
                    owner: "Chris",
                    status: true,
                    body: "this is Chris",
                    category: "homework"
                },
                {
                    _id: "pat_id",
                    owner: "Pat",
                    status: true,
                    body: "this is Pat",
                    category: "homework"
                },
                {
                    _id: "sam_id",
                    owner: "Sam",
                    status: false,
                    body: "this is Sam",
                    category: "groceries"
                }
            ])
        };

        TestBed.configureTestingModule({
            imports: [PipeModule],
            declarations: [ TodosListComponent ],
            providers:    [ { provide: TodosListService, useValue: todosListServiceStub } ]
        })
    });

    beforeEach(async(() => {
        TestBed.compileComponents().then(() => {
            fixture = TestBed.createComponent(TodosListComponent);
            todosList = fixture.componentInstance;
            fixture.detectChanges();
        });
    }));


    it("contains all the todos", () => {
        expect(todosList.todos.length).toBe(3);
    });

    it("contains an owner named 'Chris'", () => {
        expect(todosList.todos.some((todo: Todos) => todo.owner === "Chris" )).toBe(true);
    });

    it("contain an owner named 'Jamie'", () => {
        expect(todosList.todos.some((todo: Todos) => todo.owner === "Jamie" )).toBe(true);
    });

    it("doesn't contain an owner named 'Santa'", () => {
        expect(todosList.todos.some((todo: Todos) => todo.owner === "Santa" )).toBe(false);
    });

    it("has two todos with category 'homework'", () => {
        expect(todosList.todos.filter((todo: Todos) => todo.category === "homework").length).toBe(2);
    });

});
*/