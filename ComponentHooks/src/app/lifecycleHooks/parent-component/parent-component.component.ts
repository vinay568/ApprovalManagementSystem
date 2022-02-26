import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {

  counter = 10;
  msg:any;
  constructor() {
    //console.log("This is constructor of parent") 
  }
  // increment():number{
  //     return this.counter++;
  // }
  // decrement():number{
  //   return this.counter--;
  // }

  ngOnInit(): void{
  
    //console.log("ngOnInit invoked after onchanges"+this.increment());
  }
  

}
