import { HasFormatter } from '../interfaces/HasFormatter.js';

export class Task implements HasFormatter {
	text: string;
	date: object;
	state: boolean;

	constructor(t: string, d: object, s: boolean = false) {
		this.text=t;
		this.date=d;
		this.state=s;
	}

	add() {
		return `${this.text} `
	}
	complete() {
		if (this.state) {
			return `The task "${this.text}" is complete`
		}
		return `The task "${this.text}" is non complete`
	}
	edit(newText: string) {
		this.text=newText;
	}
}