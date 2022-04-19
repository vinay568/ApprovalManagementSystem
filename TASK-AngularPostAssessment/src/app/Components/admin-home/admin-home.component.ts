import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { BooksTable } from 'src/app/Models/books.model';
import { BooksTableService } from 'src/app/Services/books-table.service';
import { AddBookComponent } from '../add-book/add-book.component';
import { MatDialog } from '@angular/material/dialog';
import { EditBookComponent } from '../edit-book/edit-book.component';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  displayedColumns :string[] =['id','name','author','description','count','available','action'];
  data =new MatTableDataSource<BooksTable>();
  book : BooksTable;
  constructor(private route : Router,private booksTableService: BooksTableService, private dialog : MatDialog) { }

  ngOnInit(): void {
    this.displayBooksTable();
    this.booksTableService.refreshRequired.subscribe(response => {
      this.displayBooksTable();
     
    })
  }

  public displayBooksTable():void{
    this.booksTableService.booksData().subscribe((response: BooksTable[])  => {
      this.data= new MatTableDataSource<BooksTable>(response);
      console.log(this.data);
    }, error=>{console.log(error);})
  }
  onAdd():void{
    this.dialog.open(AddBookComponent);
  }
  onEdit(id:any):void{
    console.log(id);
    let dialog_open= this.dialog.open(EditBookComponent);
    dialog_open.componentInstance.bookid = id;
  }
  onDelete(id:any):void{
    this.booksTableService.deleteBook(id).subscribe(response =>{
      console.log(response);
      alert("Book is deleted successfully");
    }, error=>{console.log(error);})
   }
}
