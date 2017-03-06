import { ComponentFixture, TestBed, async } from "@angular/core/testing";
import { Todos } from "./todos";
import { TodosComponent } from "./todos.component";
import { TodosListService } from "./todos-list.service";
import { Observable } from "rxjs";
import { PipeModule } from "../../pipe.module";

describe("Todo component", () => {

    let todosComponent: TodosComponent;
    let fixture: ComponentFixture<TodosComponent>;

    let todosListServiceStub: {
        getTodoById: (todoId: string) => Observable<Todos>
    };

    beforeEach(() => {
        // stub UserService for test purposes
        todosListServiceStub = {
            getTodoById: (todoId: string) => Observable.of([
                {
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
            ].find(todo => todo._id === todoId))
        };

        TestBed.configureTestingModule({
            imports: [PipeModule],
            declarations: [ TodosComponent ],
            providers:    [ { provide: TodosListService, useValue: todosListServiceStub } ]
        })
    });

    beforeEach(async(() => {
        TestBed.compileComponents().then(() => {
            fixture = TestBed.createComponent(TodosComponent);
            todosComponent = fixture.componentInstance;
        });
    }));

    it("can retrieve Pat by ID", () => {
        todosComponent.setId("pat_id");
        expect(todosComponent.todo).toBeDefined();
        expect(todosComponent.todo.owner).toBe("Pat");
        expect(todosComponent.todo.category).toBe("homework");
    });

    it("returns undefined for Santa", () => {
        todosComponent.setId("Santa");
        expect(todosComponent.todo).not.toBeDefined();
    });

});