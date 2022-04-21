import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController} from'@angular/common/http/testing';


import { BooksTableService } from './books-table.service';
import { BooksTable } from '../Models/books.model';

describe('BooksTableService', () => {
  let service: BooksTableService;
  let mockHttp : HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[BooksTableService]
    });
    service = TestBed.inject(BooksTableService);
    mockHttp= TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all Books details ',()=>{

    const booksDetails : BooksTable[] =[
      {id: 1, name:'Life is hell',author:'vinay',description:"Life is more than that",count:10,available:true},
      {id: 1, name:'Life is Heaven',author:'vinay',description:"Life is more than that",count:10,available:true},
    ]

    service.booksData().subscribe((res:any) =>{
      console.log(res);
      expect(res).toBeTruthy();
      console.log(res[0].name);
      expect(res[0].name).toEqual("Life is hell");
    })

    const mockRes = mockHttp.expectOne("http://localhost:7000/Books");
    expect(mockRes.request.method).toBe('GET');
    mockRes.flush(booksDetails);

  });

  it('should get book by id',()=>{
    const Id =2;
    const booksDetails : BooksTable[] =[
      {id: 1, name:'Life is hell',author:'vinay',description:"Life is more than that",count:10,available:true},
      {id: 2, name:'Life is Heaven',author:'vijay',description:"Life is more than that",count:10,available:true},
    ];
    service.getBookById(Id).subscribe((res:any)=>{
      console.log(res);
      expect(res).toBeTruthy();
      expect(res[1].id).toEqual(Id);
    })
    const mockRes = mockHttp.expectOne(`http://localhost:7000/Books/${Id}`);
    expect(mockRes.request.method).toBe('GET');
    mockRes.flush(booksDetails);

  });

  it('Should add a book ',()=>{
    const book: BooksTable[] = [
    {id: 3, name:'Life is Awesome',author:'vineeth',description:"Life is more than that",count:10,available:true},
    ];
    

    service.addBooks(book).subscribe((res:any)=>{
      console.log(res);
      expect(res).toBeTruthy();
      expect(res).toEqual(book);
      
    })
    const reqData = mockHttp.expectOne("http://localhost:7000/Books");
    expect(reqData.request.method).toEqual('POST');
    console.log(book);
    expect(reqData.request.body).toEqual(book);
  });

  it('Should edit or update the book',()=>{
    const updateBook =
      {author : 'Ajay'};
    const booksDetails : BooksTable[] =[
      {id: 1, name:'Life is hell',author:'vinay',description:"Life is more than that",count:10,available:true},
      {id: 2, name:'Life is Heaven',author:'vijay',description:"Life is more than that",count:10,available:true},
    ];
    service.editBook(updateBook,1).subscribe((editedBook : any)=>{
      console.log(editedBook);
      expect(editedBook).toBeTruthy();
      expect(editedBook.author).toEqual('Ajay');
    })
    const editRequested = mockHttp.expectOne(`http://localhost:7000/Books/1`);
    expect(editRequested.request.method).toBe('PUT');
    console.log(editRequested.request.body);
    expect(editRequested.request.body).toEqual(updateBook);
    editRequested.flush(booksDetails);
  });

  it('Should delete the book',()=>{
    const id=1
    const booksDetails : BooksTable[] =[
      {id: 1, name:'Life is hell',author:'vinay',description:"Life is more than that",count:10,available:true},
      {id: 2, name:'Life is Heaven',author:'vijay',description:"Life is more than that",count:10,available:true},
    ];
    service.deleteBook(1).subscribe((deletedBook : any)=>{
      console.log(deletedBook);
      expect(deletedBook).toBeTruthy();
      
    })
    const editRequested = mockHttp.expectOne(`http://localhost:7000/Books/${id}`);
    expect(editRequested.request.method).toBe('DELETE');
    editRequested.flush(booksDetails);
  });

  it('Should add a requested book ',()=>{
    const book: BooksTable[] = [
    {id: 3, name:'Life is Awesome',author:'vineeth',description:"Life is more than that",count:10,available:true},
    ];
    

    service.addRequestedBooks(book).subscribe((res:any)=>{
      console.log(res);
      expect(res).toBeTruthy();
      expect(res).toEqual(book);
      
    })
    const reqData = mockHttp.expectOne("http://localhost:7000/Books");
    expect(reqData.request.method).toEqual('POST');
    console.log(book);
    expect(reqData.request.body).toEqual(book);
  });

  it('should get all requested Books details ',()=>{

    const booksDetails : BooksTable[] =[
      {id: 1, name:'Life is hell',author:'vinay',description:"Life is more than that",count:10,available:true},
      {id: 1, name:'Life is Heaven',author:'vinay',description:"Life is more than that",count:10,available:true},
    ]

    service.booksData().subscribe((res:any) =>{
      console.log(res);
      expect(res).toBeTruthy();
      console.log(res[0].name);
      expect(res[0].name).toEqual("Life is hell");
    })

    const mockRes = mockHttp.expectOne("http://localhost:7000/Books");
    expect(mockRes.request.method).toBe('GET');
    mockRes.flush(booksDetails);

  });

});
