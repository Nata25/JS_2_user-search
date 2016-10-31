// -------------------------------------
// JavaScript. HW 2
// Insert names into array and seach for a user
// -------------------------------------

var array = insertNames();

if (array != undefined) {
    searchUser(array);
}

// Put 5 names into array
// @return {array} names

function insertNames() {
    var names = new Array();

    for (var i = 1; i<=5; i++) {
        var name = prompt("Додайте користувача:");
        if (name != null) {
            names.push(name);
            console.log("Додано користувача " + i + ": " + name);
        }
        // catch input cancel
        else {
            cancelInput();
            return;
        }
    }
    return names;
}

// Get user name and search through the array
// @param {array} names

function searchUser(names) {

    // catch empty string
    do {
        var currentUser = prompt("Введіть ім'я користувача:");

        // catch unput cancel
        if (currentUser == null) {
            cancelInput();
            return;
        }

    // } while ( (currentUser.length == 0) || !(/\w/.test(currentUser)) );
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

function cancelInput() {
    console.log("Подальше виконання програми скасовано.");
}
