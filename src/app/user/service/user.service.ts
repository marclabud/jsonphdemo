import { Injectable } from '@angular/core';
import {HttpService} from '../../shared/http.service';
import {Observable} from 'rxjs';
import {User} from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService) { }

  getUsers(): Observable<User[]> {
    return this.httpService.getUsers();
  }

}
