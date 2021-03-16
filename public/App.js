import { Task } from './classes/Task.js';
import { Party } from './classes/Party.js';
import { ListTemplate } from './classes/ListTemplate.js';
const form = document.querySelector('.new-item');
const type = document.querySelector('#type');
const tasks = document.querySelector('#task-list');
const input = document.querySelector('#text');
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
let item;
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (type.value == 'event') {
        item = new Party(input.value, { 3: 3 });
    }
    else {
        item = new Task(input.value, { 3: 3 });
    }
    list.render(item, type.value, 'start');
});
tasks.addEventListener('click', (e) => {
    const deleteF = document.querySelector('.delete');
    if (e.target == deleteF) {
        const li = deleteF.closest('li');
        ul.removeChild(li);
    }
});
/* if (deleteF) {
    deleteF.addEventListener('click', (e: Event) => {
        const li=deleteF.closest('li');


        console.log(li)
    })
} */
/* let tasks: Task[]=[];
tasks.push(task1, task2); */
