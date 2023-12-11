import { Component } from "@angular/core";

@Component({
	selector: "app-heroes-hero",
	templateUrl: "./hero.component.html",
	styleUrl: "./hero.component.css",
})
export class HeroComponent {
	public name: string = "iroman";
	public age: number = 45;

	get capitalizarNombre(): string {
		return this.name.toUpperCase();
	}

	getHeroDesciption(): string {
		return `${this.name} - ${this.age}`;
	}

	changeHero(): void {
		this.name = "Spiderman";
		console.log("entro a changeHero");
	}

	changeAge(): void {
		this.age = 30;
	}
}
