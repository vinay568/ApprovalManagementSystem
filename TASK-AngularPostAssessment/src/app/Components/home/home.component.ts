import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RequestedBooks } from 'src/app/Models/requestedBooks.model';
import { BooksTableService } from 'src/app/Services/books-table.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any;
  books: any;
  date: any;
  count:any =0;
  reqdata: any;
  requestbook: any;
  filterId:any="";
  constructor(private booksTableService: BooksTableService,  private _toaster: ToastrService) { }

  ngOnInit(): void {
    this.getBooks();
    
  }

  //Shows books
  public getBooks() {
    return this.booksTableService.booksData().subscribe((response) => {
      this.books = response;
      console.log(this.books);
    }, error => { console.log(error); })
  }

  //get book by id
  public onRequest(data: any) {
    this.requestbook = data;
    this.length();
  }

  public length() {
    this.booksTableService.getRequestedData().subscribe(res => {
      this.reqdata = res;
      this.countReqData();
    }, error => { console.log(error); })
  }

  public countReqData() {

    if (this.reqdata) {
      for (var i in this.reqdata) {
        
        this.count = this.count + 1;
        
      }
    }
    this.addRequest();

  }

  public addRequest() {

    if (!this.reqdata || this.count <= 3) {
        this.getRequestedBook();
    }
    else {
      this._toaster.warning("You exceed the limit of book request");
    }
  }

  public getRequestedBook(){
    this.booksTableService.addRequestedBooks(this.requestbook).subscribe((res) => {
      this.data = res;
      this.date = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
      this._toaster.success("Your return date is " + this.date);
    }, error => { console.log(error); })
  }

}
