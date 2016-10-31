
var array = insertNames();

if (array != undefined) {
    searchUser(array);
}


function insertNames() {
    var names = new Array();

    for (var i = 1; i<=5; i++) {
        var name = prompt("Додайте користувача:");
        if (name != null) {
            names.push(name);
            console.log("Додано користувача " + i + ": " + name);
        }
        else {
            console.log("Перервано користувачем.");
            return;
        }
    }
    return names;
}

function searchUser(names) {

    // catch empty string
    do {
        var currentUser = prompt("Введіть ім'я користувача:");
    } while (currentUser.length == 0);

    for (var j = 0; j < names.length; j++) {
        if (names[j] == currentUser) {
            alert("Вітаємо, " + currentUser + ", ви успішно зайшли в систему!");
            return;
        }
    }
    alert("Ім'я користувача не знайдено.");
    return;
}
