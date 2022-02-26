
function fetchUrl()
{
    return fetch("https://reqres.in/api/users?page=1")
    .then(response  => {return response.json()})
    .then(data => {console.log(data.data);
    const html = data.data
    .map(user =>{
        return `
        <div class="user">
        <p>Name : ${user.first_name}</p>

        </div>
        `;
    })
    .join("");
    // console.log(html);
    document.querySelector("#app")?.insertAdjacentHTML("afterbegin",html);
    })
    .catch(error => {
        console.log(error);
    })
}

fetchUrl()