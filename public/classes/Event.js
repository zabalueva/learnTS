export class Event {
    constructor(t, d, s = false) {
        this.text = t;
        this.date = d;
        this.state = s;
    }
    add() {
        /* this.date.getDate() */
        return `${this.text} is sheduled for ${this.date}`;
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
