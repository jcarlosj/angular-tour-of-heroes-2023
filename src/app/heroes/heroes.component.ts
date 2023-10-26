import { Component } from '@angular/core';
import { Hero } from '../interfaces/hero';

import { HEROES } from '../data/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {


  public heroes = HEROES;

  public selectedHero!: Hero;

  onSelect( hero: Hero): void {
    this.selectedHero = hero;
  }
}
