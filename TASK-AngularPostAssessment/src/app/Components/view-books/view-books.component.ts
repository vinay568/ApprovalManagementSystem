import { Component, OnInit } from '@angular/core';
import { BooksTableService } from 'src/app/Services/books-table.service';

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.css']
})
export class ViewBooksComponent implements OnInit {

  books:any;
  date:any;

  constructor(private booksTableService : BooksTableService) { }

  ngOnInit(): void {
    this.viewBook();
  }

  public viewBook(){
    this.booksTableService.getRequestedData().subscribe(res=>{
      this.books = res;
      this.date = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    }, error => {console.log(error)})
  }
}
