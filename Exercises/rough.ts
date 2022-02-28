// let age : any = 68.7820246;

// age = age.toPrecision();

// console.log(age);
// console.log(typeof(age.toString));

// console.log(typeof(age));
// let name1 = require('readline-sync').question("Enter your name: ");
// //var username = name1.question("ENter your name:")
// console.log(name1);

// let accNumber = Math.floor(Math.random() *1000000000000) +100000000000;
//         console.log("SAV"+accNumber);
// var tuple = ['tony',8];
// tuple[1] = 'Krishna';
// tuple[2] = 9;
// var custArray :Array<any> = [];
// for(var i=0;i<=1;i++)
// {
//     custArray[i] = tuple [i]+ "\n";

// }
// let minBalance =100;
// console.log(tuple);
// let minBalance =5000;
// let customerDetails =["hi"];
// let data = window.sessionStorage.setItem(customerDetails[0],minBalance.toString());
//         let varData = window.sessionStorage.getItem(customerDetails[0]);
//         console.log(customerDetails[0] + " - " + varData);

// var minBalance = 30;
// let a = require('readline-sync').question("enter your number : ");
// add(minBalance,parseInt(a));

// function add(arg1,arg2){
//   var arg3 = arg1 +arg2;

//   console.log(arg3);
// }
//console.log("Enter email address : ");
// let Email : any = require('readline-sync').question("enter email :");

// var emailReg =new RegExp (/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/);

// if(emailReg.test(Email))
// {
//     console.log("yes");
// }
// else{console.log("yesyesyes");}
//import {document} from document;
interface Person {
    firstName: string;
    lastName: string;
  }
   
  function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
  }
   
  let user = { firstName: "Jane", lastName: "User" };
   
  document.body.textContent = greeter(user);