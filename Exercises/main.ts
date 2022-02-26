//import fetch from "node-fetch";
//import document from "./node_modules/window";
function fetchUrl(): Promise<any>
{
    var data:[];
    return fetch("https://reqres.in/api/users?page=1")
    .then((response: { json: () => any; })  => {return response.json()})
    .then((data: any) => {console.log(data.data);})
    // const html = data.data
    // .map((user :any) =>{
    //     return `
    //     <div class="user">

    //     <p> Name : ${user.first_name} </p>
    //     <p> Email : ${user.Email}</p>
    //     <p> LastName : ${user.last_name}</p>

    //     </div>
    //     `;
    // })
    // .join("");
    // console.log(html);
    // document.querySelector("#app")?.insertAdjacentHTML("afterbegin",html);
    // })
    .catch((error: any) => {
        console.log(error);
    })
}

fetchUrl()