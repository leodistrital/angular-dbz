import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Output } from "@angular/core";
import { Character } from "../../interfaes/character.interface";

@Component({
	selector: "app-add-dbz-character",
	templateUrl: "./addCharacter.component.html",
})
export class AddCharacterComponent {
	@Output()
	public onNewCharacter: EventEmitter<Character> = new EventEmitter();

	public character: Character = {
		name: "",
		power: 0,
	};

	emitCharacter(): void {
		// console.log(this.character);

		this.onNewCharacter.emit({ ...this.character });

		this.character.name = "";
		this.character.power = 0;
	}
}
