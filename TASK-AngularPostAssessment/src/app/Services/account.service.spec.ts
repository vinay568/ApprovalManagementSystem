import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing'

import { AccountService } from './account.service';

describe('AccountService', () => {
  let service: AccountService;
  let mockHttp = HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(AccountService);
    mockHttp = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
});
