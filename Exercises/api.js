"use strict";
exports.__esModule = true;
var node_fetch_1 = require("./node_modules/node-fetch");
var window_1 = require("./node_modules/window");
function fetchUrl() {
    return (0, node_fetch_1["default"])("https://reqres.in/api/users?page=1")
        .then(function (response) { return response.json(); })
        .then(function (data) {
        var _a;
        console.log(data.data);
        var html = data.data
            .map(function (user) {
            return "\n        <div class=\"user\">\n        <p>Name : $(user.first-name)</p>\n\n        </div>\n        ";
        })
            .join("");
        console.log(html);
        (_a = window_1["default"].querySelector("#app")) === null || _a === void 0 ? void 0 : _a.insertAdjacentHTML("afterbegin", html);
    })["catch"](function (error) {
        console.log(error);
    });
}
fetchUrl();
