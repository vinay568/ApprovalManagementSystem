import { Component, OnInit,OnChanges,DoCheck,SimpleChange,SimpleChanges,Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})

export class ChildComponentComponent implements OnInit{

@Input() myNumber: number | undefined;
@Output() childInfo = new EventEmitter();

  
  constructor() { 
    //console.log("This is child component constructor!!!!!!")
  }
  

  ngOnInit(): void {
    //console.log("This is child oninint");
  }
//   ngOnChanges(changes: SimpleChanges): void {
//     const newNumber : SimpleChange = changes['myNumber'];
//     console.log("ngOnchanges Invoked" + newNumber.previousValue);
    

// }
//   ngDoCheck(): void{
//     console.log("Docheck Invoked after onchanges");
//   }
// ngViewChecked(){
//   console.log("ngViewChecked invoked after ngContenetChecked");
// }
// ngContentChecked(){
//   console.log("ngContenetChecked invoked after ngDoCheck");
// }

child() {
  this.childInfo.emit("calling frpom child into parent");
}
}
