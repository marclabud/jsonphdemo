import {Component, OnInit} from '@angular/core';
import {UserService} from './service/user.service';
import {User} from './user';


@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
    users: User[];
    selectedUser: User;
    selectedUserName = 'No User selected';

    constructor(private user: UserService) {
    }

    ngOnInit() {
        this.getUsers();
    }

    getUsers(): void {
        this.user.getUsers().subscribe
        (users => {
            this.users = users;
        });
    }

    selectUser(user: User): void {
        this.selectedUser = user;
        this.selectedUserName = this.selectedUser.name;
    }
}
