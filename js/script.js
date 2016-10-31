
var names = new Array();

for (var i = 1; i<=5; i++) {
    var name = prompt("Додайте ім'я:");
    names.push(name);
    console.log("Додано користувача " + i + ": " + name);
}

var currentUser = prompt("Введіть ім'я користувача:");

for (var j = 0; j < names.length; j++) {
    if (names[j] == currentUser) {
        alert(currentUser + ", ви успішно зайшли в систему!");
    }
}
