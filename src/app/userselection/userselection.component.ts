import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {UserService} from '../shared/user.service';
import {User} from '../user/user';

@Component({
  selector: 'app-userselection',
  templateUrl: './userselection.component.html',
  styleUrls: ['./userselection.component.scss']
})
export class UserselectionComponent implements OnInit {
    users: User[];
    selectedUser: User;
    UserListControl = new FormControl();

  constructor(private user: UserService) { }

  ngOnInit() {
      this.getUsers();
  }

    getUsers(): void {
        this.user.getUsers().subscribe
        (users => {
            this.users = users;
        });
    }

    displayFn(val: User) {
        return val ? val.name : val;
    }
}
