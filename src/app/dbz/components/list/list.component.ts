import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Character } from "../../interfaes/character.interface";

@Component({
	selector: "app-dbz-list",
	templateUrl: "./list.component.html",
	styleUrl: "./list.component.css",
})
export class ListComponent {
	@Input()
	public characterList: Character[] = [
		{
			name: "Trunks",
			power: 10,
		},
	];

	@Output()
	public onDeleteCharacterById: EventEmitter<string> = new EventEmitter();

	// OnDeleteId=

	onDeleteCharacter(id: string | undefined): void {
		console.log(id);
		this.onDeleteCharacterById.emit(id);
	}
}
