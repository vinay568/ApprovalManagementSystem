//import fetch from "node-fetch";
//import document from "./node_modules/window";
function fetchUrl() {
    var data;
    return fetch("https://reqres.in/api/users?page=1")
        .then(function (response) { return response.json(); })
        .then(function (data) { console.log(data.data); })["catch"](function (error) {
        console.log(error);
    });
}
fetchUrl();
