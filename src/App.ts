import { Task } from './classes/Task.js';
import { Party } from './classes/Party.js';
import { HasFormatter } from './interfaces/HasFormatter.js';
import { ListTemplate } from './classes/ListTemplate.js';

const form=document.querySelector('.new-item') as HTMLFormElement;
const type=document.querySelector('#type') as HTMLSelectElement;
const task=document.querySelector('#add-task') as HTMLFormElement;
const input=document.querySelector('#text') as HTMLInputElement;;

const ul=document.querySelector('ul')!;
const list=new ListTemplate(ul);

let item: HasFormatter;

form.addEventListener('submit', (e: Event) => {
	e.preventDefault();

	if (type.value=='event') {
		item=new Party(input.value, { 3: 3 });
	} else {
		item=new Task(input.value, { 3: 3 });
	}

	list.render(item, type.value, 'start');

})

/* let tasks: Task[]=[];
tasks.push(task1, task2); */


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
