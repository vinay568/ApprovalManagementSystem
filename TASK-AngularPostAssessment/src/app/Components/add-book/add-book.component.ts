import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/Services/account.service';
import { BooksTableService } from 'src/app/Services/books-table.service';
import { AdminHomeComponent } from '../admin-home/admin-home.component';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  dataForm : FormGroup;

  constructor(private booksService:BooksTableService,private route: Router, private form : FormBuilder,
     private dialogRef : MatDialogRef<AdminHomeComponent>,@Inject(MAT_DIALOG_DATA) public data:any,
     private _toaster: ToastrService) { }
  
  ngOnInit(): void {
    this.dataForm = this.form.group({
      id:['',Validators.required],
      name:['',Validators.required],
      author:['',Validators.required],
      description:['',Validators.required],
      count:['',Validators.required],
      available:['',Validators.required]
    })
  }
  
public onFormSubmit(form: NgForm){

  this.booksService.addBooks(form).subscribe( response =>{
    console.log(response);
    //const id = response['id'];
    this._toaster.success("Book added successfully");
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
