"use strict";
class User {
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;
    }
}
let tom = new User("Том", 29);
let rick = new User("Rick", 25);
console.log("Имя: ", tom.name, " возраст: ", tom.age);
class Title {
    constructor(name) {
        this.name = name;
    }
}
let titleCommon = new Title('What I should to do');
const app = document.getElementById('app'); //getElementsByClassName - not properties appendChild
let p = document.createElement('p');
/* p.textContent=welcomeApp(titleCommon); */
app === null || app === void 0 ? void 0 : app.appendChild(p);
function welcomeApp(title) {
    return title;
}
/* document.body.textContent = welcomeApp(titleCommon);
 */
/* const james = {
    firstName: "James",
    lastName: "Quick"
};

welcomePerson(james);

interface Person {
    firstName: string;
    lastName: string;
}

document.body.textContent = welcomePerson(james); */
