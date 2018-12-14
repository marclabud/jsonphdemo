import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TodoComponent} from './todo.component';
import {MaterialModule} from '../material-module';

import {HttpClientTestingModule} from '@angular/common/http/testing';
import {HttpService} from '../shared/http.service';

describe('TodoComponent', () => {
    let component: TodoComponent;
    let fixture: ComponentFixture<TodoComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TodoComponent],
            imports: [MaterialModule, HttpClientTestingModule],
            providers: [HttpService],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TodoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
