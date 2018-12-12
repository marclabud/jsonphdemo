import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {UserService} from '../shared/user.service';
import {User} from '../user/user';
import {Observable} from 'rxjs';
import {map, startWith, switchMap, tap} from 'rxjs/operators';

@Component({
  selector: 'app-userselection',
  templateUrl: './userselection.component.html',
  styleUrls: ['./userselection.component.scss']
})
export class UserselectionComponent implements OnInit {
    users: User[];
    selectedUser: User;
    filteredUsers: Observable<User[]>;
    UserListControl = new FormControl();

  constructor(private userService: UserService) { }

  ngOnInit() {
      this.filteredUsers = this.UserListControl.valueChanges
          .pipe(
              startWith(''),
              switchMap(filtertext => this.userService.getFilteredUsers(filtertext) )
          );
      // ToDo: GetUsers in Service veschieben, der das Suchkriterium enthält und die rxjs Funtion filter benutzt
      // this.getUsers();
  }

    getUsers(): void {
        this.userService.getUsers().subscribe
        (users => {
            this.users = users;

        });
    }

    displayFn(val: User) {
        return val ? val.name : val;
    }

    private _filter(value: string): User[] {
        const filterValue = value.toLowerCase();

        return this.users.filter(user => {
             user.name.toLowerCase().includes(filterValue);
        });
    }
}
