import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
import { HeroService } from '../hero.service'
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  
})
export class HeroesComponent implements OnInit {
  heroes: Hero[]
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  constructor(private heroService: HeroService) { }
    selectedHero: Hero;
    onSelect(hero: Hero): void {
      this.selectedHero = hero;
    }
    getHeroes(): void {
      this.heroes = this.heroService.getHeroes()
    }
  ngOnInit() {
    this.getHeroes()
  }
}
