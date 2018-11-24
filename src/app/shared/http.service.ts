import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../user/user';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    baseUrl = 'https://jsonplaceholder.typicode.com';
    userUrl = '/users';

    constructor(private http: HttpClient) {
    }

    /** GET Users from the server */
    public getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.baseUrl + this.userUrl);
    }
}


