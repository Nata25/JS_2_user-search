
var names = new Array();

for (var i = 1; i<=5; i++) {
    var name = prompt('Enter the ' + ', numbers only:', '0');
    console.log(name);
    console.log(typeof name);
    if (name != null) {
        console.log(name != null);
        names.push(name);
        console.log("Додано користувача " + i + ": " + name);
    }
    else {
        console.log("Перервано користувачем.");
        break;
    }
}

var currentUser = prompt("Введіть ім'я користувача:");

for (var j = 0; j < names.length; j++) {
    if (names[j] == currentUser) {
        alert("Вітаємо, " + currentUser + ", ви успішно зайшли в систему!");
    }
    else {
        alert("Ім'я користувача не знайдено.");
        break;
    }
}
