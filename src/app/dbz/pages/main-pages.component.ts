import { Component, OnInit } from "@angular/core";
import { DbzService } from "../services/dbz.service";
import { Character } from "../interfaes/character.interface";

@Component({
	selector: "app-dbz-main-page",
	templateUrl: "main-page.component.html",
})
export class mainPageComponent {
	constructor(private dbzService: DbzService) {}

	get character(): Character[] {
		return [...this.dbzService.character];
	}

	ondeteleCharacter(id: string): void {
		this.dbzService.handleDeleteCharacterByUUid(id);
	}

	onNewCaracther(caracther: Character): void {
		this.dbzService.handleOnNewCharacter(caracther);
	}
}
