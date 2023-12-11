import { Component } from "@angular/core";

@Component({
	selector: "app-counter",
	template: `
		<h1>Hola Leonardo Counter</h1>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
			consequatur
		</p>
		<h3>{{ counter }}</h3>
		<button (click)="incrementar()">+ 1</button>
		<button (click)="reset()">Reset</button>
		<button (click)="decrementar()">- 1</button>
	`,
})
export class CounterComponent {
	counter = 100;

	incrementar() {
		this.counter++;
	}

	decrementar() {
		this.counter--;
	}

	reset() {
		this.counter = 100;
	}
}
