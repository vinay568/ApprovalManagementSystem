import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController} from'@angular/common/http/testing';

import { AccountService } from './account.service';
import { AccountsModel } from '../Models/accounts.model';

describe('AccountService', () => {
  let service: AccountService;
  let mockHttp : HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[AccountService]
    });
    service = TestBed.inject(AccountService);
    mockHttp=TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get Account details of user',()=>{

    const userDetails : AccountsModel[] =[
      {id: 1, email:'vinay@gmail.com',password:'vinay@123',isAdmin:true},
      {id: 2, email:'vijay@gmail.com',password:'vijay@123',isAdmin:false},
    ]

    service.login().subscribe((res:any) =>{
      console.log(res);
      expect(res).toBeTruthy();
      expect(res[0].email).toEqual("vinay@gmail.com");
    })

    const mockRes = mockHttp.expectOne("http://localhost:3000/Accounts");
    expect(mockRes.request.method).toBe('GET');
    mockRes.flush(userDetails);

  });

});
