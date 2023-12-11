import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeroComponent } from "./hero/hero.component";
import { AppHeroesListComponent } from "./list/app-heroes-list/app-heroes-list.component";

@NgModule({
	declarations: [HeroComponent, AppHeroesListComponent],
	exports: [HeroComponent, AppHeroesListComponent],
	imports: [CommonModule],
})
export class HeroesModule {}
