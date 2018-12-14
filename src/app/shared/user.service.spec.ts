import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';
import {HttpService} from './http.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({
      providers: [HttpService],
      imports: [HttpClientTestingModule]}));

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });
});
