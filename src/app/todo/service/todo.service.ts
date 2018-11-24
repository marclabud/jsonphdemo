import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {ToDo} from '../todo';
import {HttpService} from '../../shared/http.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpService: HttpService) { }

    getToDos(): Observable<ToDo[]> {
        return this.httpService.getToDos();
    }
}
