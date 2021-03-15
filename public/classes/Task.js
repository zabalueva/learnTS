export class Task {
    constructor(t, d, s = false) {
        this.text = t;
        this.date = d;
        this.state = s;
    }
    add() {
        return `${this.text} `;
    }
    complete() {
        if (this.state) {
            return `The task "${this.text}" is complete`;
        }
        return `The task "${this.text}" is non complete`;
    }
    edit(newText) {
        this.text = newText;
    }
}
