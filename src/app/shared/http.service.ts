import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../user/user';
import {ToDo} from '../todo/todo';
import {HandleError, HttpErrorHandler} from './http-error-handler.service';
import {catchError} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    baseUrl = 'https://jsonplaceholder.typicode.com';
    userUrl = '/users';
    toDoUrl = '/todos';
    private handleError: HandleError;

    constructor(
        private http: HttpClient,
        httpErrorHandler: HttpErrorHandler) {
        this.handleError = httpErrorHandler.createHandleError('HttpService');
    }

    /** GET Users from the server */
    public getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.baseUrl + this.userUrl)
            .pipe(
                catchError(this.handleError('getUsers', []))
            );
    }

    /** GET User by UserId from the server */
    public getUserById(userId: number): Observable<User[]> {
        return this.http.get<User[]>(this.baseUrl + this.userUrl + '/' + userId)
            .pipe(
                catchError(this.handleError('getUserbyId', []))
            );
    }

    /** GET ToDos from the server */
    public getToDos(): Observable<ToDo[]> {
        return this.http.get<ToDo[]>(this.baseUrl + this.toDoUrl)
            .pipe(
                catchError(this.handleError('getToDos', []))
            );
    }

    /** GET ToDos for one user from the server */
    public getToDosByUserId(userId: number): Observable<ToDo[]> {
        return this.http.get<ToDo[]>(this.baseUrl + this.toDoUrl + '?' + 'userId=' + userId)
            .pipe(
                catchError(this.handleError('getToDosByUserId', []))
            );
    }
}


