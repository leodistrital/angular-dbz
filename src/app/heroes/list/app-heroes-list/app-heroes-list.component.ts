import { Component } from "@angular/core";

@Component({
	selector: "app-app-heroes-list",
	templateUrl: "./app-heroes-list.component.html",
	styleUrl: "./app-heroes-list.component.css",
})
export class AppHeroesListComponent {
	public heroeNames: string[] = [
		"Spiderman",
		"Ironman",
		"Hulk",
		"Thor",
		"Capitan America",
	];

	public deleteHero?: string;

	removeLastHero(): void {
		this.deleteHero = this.heroeNames.pop();
		// console.log(deleteHero);
	}
}
