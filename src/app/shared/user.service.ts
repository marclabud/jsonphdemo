import {Injectable} from '@angular/core';
import {HttpService} from './http.service';
import {Observable} from 'rxjs';
import {User} from '../user/user';
import {map, tap} from 'rxjs/operators';

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
        return this.httpService.getUsers().pipe(
            map(users => users.filter(user => {
                return user.name.toLowerCase().includes(filtertext);
            }))
        );
    }
}
