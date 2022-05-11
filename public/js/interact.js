(function () {
    // sending the token back to the user to check if its expired
    var name = localStorage.getItem("user_name");
    var token = localStorage.getItem("token");
    var promise = new Promise(function (res, rej) {
        var request = new XMLHttpRequest();
        request.open('post', "flask_url?token=" + token, true);
        request.onload = res;
        request.onerror = rej;
        request.send();
    });
    promise.then(function (data) {
        console.log(data);
    })["catch"](function (e) { return console.log(e); });
    // creating a user obj
    var create_User = function (name, token) {
        var obj_schema = function (name, token) {
            this.name = name;
            this.token = token;
        };
        // getting user's name and token sent
        var create_obj = new obj_schema(name, token);
        // if the object would be more than the name and token
        var global_obj_schema = function () { };
        global_obj_schema.prototype.name = "mark";
    };
    create_User(name, parseInt(token));
    var counter = 0;
    function CheckBox() {
        return counter;
    }
})();
