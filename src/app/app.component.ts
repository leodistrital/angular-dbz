import { Component } from "@angular/core";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
})
export class AppComponent {
	public title: string = "mi primera app de angular";

	counter = 10;

	incrementar() {
		this.counter++;
	}

	decrementar() {
		this.counter--;
	}

	reset() {
		this.counter = 10;
	}
}
