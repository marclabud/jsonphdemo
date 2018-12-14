import { TestBed } from '@angular/core/testing';
import { TodoService } from './todo.service';
import {HttpService} from '../../shared/http.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('TodoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
      providers: [HttpService],
      imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: TodoService = TestBed.get(TodoService);
    expect(service).toBeTruthy();
  });
});
