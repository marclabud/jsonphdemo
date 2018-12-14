import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {UserlistComponent} from './userlist.component';
import {UserService} from '../../shared/user.service';
import {MaterialModule} from '../../material-module';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {HttpService} from '../../shared/http.service';

describe('UserComponent', () => {
    let component: UserlistComponent;
    let fixture: ComponentFixture<UserlistComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UserlistComponent],
            providers: [UserService, HttpService],
            imports: [MaterialModule, HttpClientTestingModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UserlistComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
