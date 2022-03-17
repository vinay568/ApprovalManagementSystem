import { Component, Inject, OnInit } from '@angular/core';
import { Form, FormBuilder,  FormGroup, NgForm, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { MyDataServiceService } from 'src/app/Services/my-data-service.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { UrlComponent } from '../url/url.component';

@Component({
  selector: 'app-add-url',
  templateUrl: './add-url.component.html',
  styleUrls: ['./add-url.component.css']
})
export class AddUrlComponent implements OnInit {
dataForm : FormGroup;
  formBuilder: any;
  constructor(private myData:MyDataServiceService,private route: Router, private form : FormBuilder,
     private dialogRef : MatDialogRef<UrlComponent>,@Inject(MAT_DIALOG_DATA) public data1:any) { }
  
  ngOnInit(): void {
    this.dataForm = this.form.group({
      id:['',Validators.required],
      from:['',Validators.required],
      to:['',Validators.required],
      dateCreated:['',Validators.required],
      permanentLink:['',Validators.required]
    })
  }
  
public onFormSubmit(form: NgForm){

  this.myData.addData(form).subscribe( response =>{
    console.log(response);
    const id = response['id'];
  },
  error =>{
    console.log(error);
  })
}
onCancel():void{
  this.dialogRef.close();
}
  
}
