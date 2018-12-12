import {Injectable} from '@angular/core';
import {HttpService} from './http.service';
import {Observable, of} from 'rxjs';
import {User} from '../user/user';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private httpService: HttpService) {
    }

    getUsers(): Observable<User[]> {
        return this.httpService.getUsers();
    }


    getFilteredUsers(filtertext: string): Observable<User[]> {
        // clear if no filtertext
        if (!filtertext.trim()) {
            return of([]);
        }
        return this.httpService.getUsers().pipe(
            // filter((users) => users.name.includes(filtertext))
        );
    }
}
