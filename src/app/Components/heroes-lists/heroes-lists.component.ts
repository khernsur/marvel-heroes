import { Component } from '@angular/core';
import { Heroes } from 'src/app/interfaces/heroes';
import { HEROES } from 'src/Mock-data/mock-heroes';

@Component({
  selector: 'app-heroes-lists',
  templateUrl: './heroes-lists.component.html',
  styleUrls: ['./heroes-lists.component.css']

})
export class HeroesListsComponent {
hero: Heroes = {id: 1, name: 'Iron Man'};
heroes = HEROES;

selectedHero?: Heroes;
 onSelect(hero: Heroes): void {
 this.selectedHero = hero;
 }
}

