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
    selectUser(selecteduser: User): void {
        console.log ('User selected', selecteduser);
    }
}
