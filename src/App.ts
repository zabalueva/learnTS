class User {
	name: string;
	age: number;
	constructor (_name: string, _age: number) {
		this.name=_name;
		this.age=_age;
	}
}

let tom: User = new User("Том", 29);
let rick: User = new User ("Rick", 25)
console.log("Имя: ", tom.name, " возраст: ", tom.age);

class Title {
	name: string;

	constructor (name: string) {
		this.name = name;
	}
}
let titleCommon: Title = new Title('What I should to do') ;
const app = document.getElementById('app'); //getElementsByClassName - not properties appendChild
let p = document.createElement('p');
/* p.textContent=welcomeApp(titleCommon); */
app?.appendChild(p);

function welcomeApp(title: Title) {
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
