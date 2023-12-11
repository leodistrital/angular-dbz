import { Injectable } from "@angular/core";
import { Character } from "../interfaes/character.interface";
import { v4 as uuidv4 } from "uuid";

@Injectable({ providedIn: "root" })
export class DbzService {
	public character: Character[] = [
		{
			id: uuidv4(),
			name: "krillin",
			power: 1000,
		},
		{
			id: uuidv4(),
			name: "Goku",
			power: 9500,
		},
		{
			id: uuidv4(),
			name: "Vegeta",
			power: 7500,
		},
	];

	handleOnNewCharacter(character: Character): void {
		const newCaracter: Character = {
			id: uuidv4(),
			...character,
		};
		console.log("emitiendo...", newCaracter);
		this.character.push(newCaracter);
	}

	// handleDeleteCharacter(id: number): void {
	// 	console.log("esto llego para borrar", id);
	// 	this.character.splice(id, 1);
	// }

	handleDeleteCharacterByUUid(id: string): void {
		console.log("esto llego para borrar", id);
		this.character = this.character.filter(
			(personaje) => personaje.id != id
		);
	}
}
