import * as request from "request";
var obj;
 export interface obj{
     id : any;
     email : any;
     first_name : any;
     last_name : any;
     avatar : any;
 }
 export function Data(){
 var id =2;
 request.get("https://reqres.in/api/users/"+id, (error:any,response: any,body:any) =>{
 console.log(JSON.parse(body).data);  



 });

// var data = new Map();
// data.set('vinay',"alphabet");
// //const html = data.get('vinay');
// $.querySelector("app").insertAdjacentElement("afterbegin",data.get('vinay'));


// }

// Data();

