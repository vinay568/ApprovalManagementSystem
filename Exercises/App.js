// import * as request from "request";
// var obj;
// export interface obj{
//     id : any;
//     email : any;
//     first_name : any;
//     last_name : any;
//     avatar : any;
// }
// export function Data(){
// var id =2;
// request.get("https://reqres.in/api/users/"+id, async (error:any,response: any,body:any) =>{
// obj =JSON.parse(body).data;  
// //console.log(obj);
// const html =await obj.data.map(users =>{
//     return `<p>Name: ${users.first_name}</p>`
// })
// .join("")
// document.querySelector("app").insertAdjacentHTML("afterbegin",html);
// });
var data = new Map();
data.set('vinay', "alphabet");
//const html = data.get('vinay');
document.querySelector("app").insertAdjacentElement("afterbegin", data.get('vinay'));
// }
// Data();
