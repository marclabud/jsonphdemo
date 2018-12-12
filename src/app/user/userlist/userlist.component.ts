import {Component, OnInit} from '@angular/core';
import {UserService} from '../../shared/user.service';
import {User} from '../user';


@Component({
    selector: 'app-user',
    templateUrl: './userlist.component.html',
    styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {
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
