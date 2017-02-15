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
        // stub TodosService for test purposes
        todosListServiceStub = {
            getTodos: () => Observable.of([
                {
                    _id: "id_1",
                    owner: "Chris",
                    status: true,
                    body: "In sunt ex non tempor cillum",
                    category: "software design"
                },
                {
                    _id: "id_2",
                    owner: "Pat",
                    status: false,
                    body: "Ipsum esse est ullamco magna",
                    category: "homework"
                },
                {
                    _id: "id_3",
                    owner: "Jamie",
                    status: true,
                    body: "Aliqua esse aliqua veniam id",
                    category: "groceries"
                }
            ])
        };

        TestBed.configureTestingModule({
            imports: [PipeModule],
            declarations: [ TodosListComponent ],
            // providers:    [ UserListService ]  // NO! Don't provide the real service!
            // Provide a test-double instead
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

    it("contains all the owners", () => {
        expect(todosList.todos.length).toBe(3);
    });

    it("contains a owner named 'Chris'", () => {
        expect(todosList.todos.some((todo: Todos) => todo.owner === "Chris" )).toBe(true);
    });

    it("contain a owner named 'Jamie'", () => {
        expect(todosList.todos.some((todo: Todos) => todo.owner === "Jamie" )).toBe(true);
    });

    it("doesn't contain a owner named 'Santa'", () => {
        expect(todosList.todos.some((todo: Todos) => todo.owner === "Santa" )).toBe(false);
    });

    it("has two owners whose status is true", () => {
        expect(todosList.todos.filter((todo: Todos) => todo.status === true).length).toBe(2);
    });

});
