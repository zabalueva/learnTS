export class Events {
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
            return `This event "${this.text}" has happened`;
        }
        return `This event "${this.text}" hasn't happened`;
    }
    edit(newText) {
        this.text = newText;
    }
}
