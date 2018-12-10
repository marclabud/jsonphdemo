import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../user/user';
import {ToDo} from '../todo/todo';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    baseUrl = 'https://jsonplaceholder.typicode.com';
    userUrl = '/users';
    toDoUrl = '/todos';

    constructor(private http: HttpClient) {
    }

    /** GET Users from the server */
    public getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.baseUrl + this.userUrl);
    }

    /** GET User by UserId from the server */
    public getUserById(userId: number): Observable<User[]> {
        return this.http.get<User[]>(this.baseUrl + this.userUrl + '/' + userId);
    }

    /** GET ToDos from the server */
    public getToDos(): Observable<ToDo[]> {
        return this.http.get<ToDo[]>(this.baseUrl + this.toDoUrl);
    }

    /** GET ToDos for one user from the server */
    public getToDosByUserId(userId: number): Observable<ToDo[]> {
        return this.http.get<ToDo[]>(this.baseUrl + this.toDoUrl + '?' + 'userId=' + userId);
    }
}


