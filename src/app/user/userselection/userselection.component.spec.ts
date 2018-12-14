import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ReactiveFormsModule} from '@angular/forms';
import {UserselectionComponent} from './userselection.component';
import {UserService} from '../../shared/user.service';
import {MaterialModule} from '../../material-module';
import {HttpService} from '../../shared/http.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

describe('UserselectionComponent', () => {
    let component: UserselectionComponent;
    let fixture: ComponentFixture<UserselectionComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UserselectionComponent],
            providers: [UserService, HttpService],
            imports: [MaterialModule,
                ReactiveFormsModule,
                HttpClientTestingModule,
                NoopAnimationsModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UserselectionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
