import {Injectable} from '@angular/core';
import { Http } from '@angular/http';
import { Todos } from './todos';
import {Observable} from "rxjs";

@Injectable()
export class TodosListService {
    private baseUrl: string = API_URL;
    constructor(private http:Http) { }

    getTodos(): Observable<Todos[]> {
        let body = this.http.request(this.baseUrl + 'todos').map(res => res.json());
        return body;
    }
}