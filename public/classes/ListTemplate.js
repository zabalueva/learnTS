export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading, pos) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);
        const p = document.createElement('p');
        p.innerText = item.add();
        li.append(p);
        const deleteBtn = document.createElement('span');
        deleteBtn.textContent = 'delete';
        deleteBtn.classList.add('delete');
        if (pos == 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}