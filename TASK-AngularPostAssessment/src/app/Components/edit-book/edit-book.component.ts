import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksTable } from 'src/app/Models/books.model';
import { BooksTableService } from 'src/app/Services/books-table.service';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  
  dataForm : FormGroup;
  editBooks : BooksTable;
  bookid:any;
  constructor(private booksService:BooksTableService,private route: Router, private form : FormBuilder,
     private dialogRef : MatDialogRef<EditBookComponent>,@Inject(MAT_DIALOG_DATA) public data:any, 
     private router: ActivatedRoute, private _toaster : ToastrService) { }
  
  ngOnInit(): void {
  
    
    this.getDetails();
    
    this.dataForm = this.form.group({
      id:[],
      name:['',Validators.required],
      author:['',Validators.required],
      description:['',Validators.required],
      count:['',Validators.required],
      available:['',Validators.required]
    })
    
    
  }
  getDetails() { this.booksService.getBookById(this.bookid).subscribe(res =>{
    this.editBooks =res;
    console.log(res);
    this.patchvalue(res);
  });}

  private patchvalue(dataBook:BooksTable){
    this.dataForm.patchValue({
      id:dataBook.id,
      name:dataBook.name,
      author:dataBook.author,
      description:dataBook.description,
      count:dataBook.count,
      available:dataBook.available
    })
  }
public onFormSubmit(form: NgForm){
  
  this.booksService.editBook(form,this.editBooks.id).subscribe( response =>{
    debugger
    console.log(response);
    this._toaster.success("Book Updated successfully");
    this.dialogRef.close();
  },
  error =>{
    console.log(error);
  })
}
onCancel():void{
  this.dialogRef.close();
}

}
