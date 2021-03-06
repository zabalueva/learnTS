import { Task } from './classes/Task.js';
import { Party } from './classes/Party.js';
import { HasFormatter } from './interfaces/HasFormatter.js';
import { ListTemplate } from './classes/ListTemplate.js';

const form=document.querySelector('.new-item') as HTMLFormElement;
const type=document.querySelector('#type') as HTMLSelectElement;
const tasks=document.querySelector('#task-list') as HTMLFormElement;
const input=document.querySelector('#text') as HTMLInputElement;


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



tasks.addEventListener('click', (e: Event) => {
	const deleteF=document.querySelector('.delete') as HTMLButtonElement;
	if (e.target == deleteF) {
		const li=deleteF.closest('li') as HTMLLIElement;
		ul.removeChild(li)
	}
})

/* if (deleteF) {
	deleteF.addEventListener('click', (e: Event) => {
		const li=deleteF.closest('li');


		console.log(li)
	})
} */






/* let tasks: Task[]=[];
tasks.push(task1, task2); */
