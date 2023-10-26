import { Component } from '@angular/core';
import { Hero } from '../interfaces/hero';

import { HEROES } from '../data/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  hero: Hero = {
    id: 1,
    name: 'Superman'
  };

  public heroes = HEROES;
}
