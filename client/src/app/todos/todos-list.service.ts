import {Injectable} from '@angular/core';
import { Http } from '@angular/http';
import { Todos } from './todos';
import {Observable} from "rxjs";

@Injectable()
export class TodosListService {
    private baseUrl: string = API_URL + "todos";
    constructor(private http:Http) { }

    getTodos(): Observable<Todos[]> {
        return this.http.request(this.baseUrl).map(res => res.json());
    }

    getTodoById(id: string): Observable<Todos> {
        return this.http.request(this.baseUrl + "/" + id).map(res => res.json());
    }
}